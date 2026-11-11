import { MongoClient } from "mongodb";

/*
  Shared MongoDB connection (reused across requests and hot reloads).
  Env: MONGODB_URI (required), MONGODB_DB (optional, default "siddhiinfo").
  Production: MongoDB Atlas — add MONGODB_URI in Vercel → Environment Variables.
*/
export const hasDatabase = () => Boolean(process.env.MONGODB_URI);

export async function getDb() {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is not configured");
  globalThis.__siddhiMongo ??= new MongoClient(process.env.MONGODB_URI, {
    maxPoolSize: 5,
    serverSelectionTimeoutMS: 8000,
  }).connect();
  const client = await globalThis.__siddhiMongo;
  const db = client.db(process.env.MONGODB_DB || "siddhiinfo");
  if (!globalThis.__siddhiIndexes) {
    globalThis.__siddhiIndexes = Promise.all([
      db.collection("leads").createIndex({ ref: 1 }, { unique: true }),
      db.collection("leads").createIndex({ createdAt: -1 }),
      db.collection("leads").createIndex({ status: 1, createdAt: -1 }),
      db.collection("admin_users").createIndex({ email: 1 }, { unique: true }),
    ]).catch((e) => { globalThis.__siddhiIndexes = null; throw e; });
  }
  await globalThis.__siddhiIndexes;
  return db;
}
