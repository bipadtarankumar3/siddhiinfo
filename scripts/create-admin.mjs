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

const [emailArg, role = "admin", name = ""] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const email = String(emailArg || "").toLowerCase();
const password = process.env.ADMIN_PASSWORD;

if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new Error("Give a valid email as the first argument");
if (!["admin", "staff", "viewer"].includes(role)) throw new Error("Role must be admin, staff or viewer");
if (!process.env.MONGODB_URI) throw new Error("Set MONGODB_URI");
// Short passwords are allowed only against a local database (development).
// Production (e.g. MongoDB Atlas) always requires 12+ characters.
const isLocalDb = /^mongodb:\/\/(127\.0\.0\.1|localhost)(:\d+)?(\/|$)/.test(process.env.MONGODB_URI);
if (!password) throw new Error("Set ADMIN_PASSWORD");
// --allow-weak-password: owner's explicit override for a short password on a non-local database.
const allowWeak = process.argv.includes("--allow-weak-password");
if (password.length < 12) {
  if (!isLocalDb && !allowWeak) throw new Error("ADMIN_PASSWORD must be 12+ characters for a non-local database (or pass --allow-weak-password)");
  console.warn(`Warning: short password accepted${isLocalDb ? " for LOCAL development" : " by explicit override (not recommended)"}.`);
}

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
