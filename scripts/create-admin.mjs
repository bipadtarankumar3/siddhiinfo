/*
  Create or update an admin user for /admin/.
  The password is read from the ADMIN_PASSWORD env var so it never appears in
  shell history as an argument. Roles: admin | staff | viewer.

  Example (local):
    ADMIN_PASSWORD='a-long-passphrase' node --env-file=.env.local scripts/create-admin.mjs you@example.com admin "Your Name"

  Production: run the same command with MONGODB_URI pointing at Atlas.
*/
import crypto from "node:crypto";
import { MongoClient } from "mongodb";

const [emailArg, role = "admin", name = ""] = process.argv.slice(2);
const email = String(emailArg || "").toLowerCase();
const password = process.env.ADMIN_PASSWORD;

if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new Error("Give a valid email as the first argument");
if (!["admin", "staff", "viewer"].includes(role)) throw new Error("Role must be admin, staff or viewer");
if (!password || password.length < 12) throw new Error("Set ADMIN_PASSWORD (12+ characters)");
if (!process.env.MONGODB_URI) throw new Error("Set MONGODB_URI");

const salt = crypto.randomBytes(16);
const hash = crypto.scryptSync(password, salt, 64, { N: 16384, r: 8, p: 1 });
const passwordHash = `scrypt$${salt.toString("base64")}$${hash.toString("base64")}`;

const client = await new MongoClient(process.env.MONGODB_URI).connect();
const users = client.db(process.env.MONGODB_DB || "siddhiinfo").collection("admin_users");
await users.createIndex({ email: 1 }, { unique: true });
const res = await users.updateOne(
  { email },
  { $set: { email, role, name, passwordHash, active: true, updatedAt: new Date() }, $setOnInsert: { createdAt: new Date() } },
  { upsert: true },
);
console.log(res.upsertedCount ? `Created ${role} user ${email}` : `Updated ${role} user ${email}`);
await client.close();
