import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "mutuguard.db");

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    db.exec(`
      CREATE TABLE IF NOT EXISTS demo_requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        company TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT DEFAULT '',
        company_size TEXT DEFAULT '',
        message TEXT DEFAULT '',
        created_at TEXT DEFAULT (datetime('now'))
      )
    `);
  }
  return db;
}

export interface DemoRequest {
  id?: number;
  name: string;
  company: string;
  email: string;
  phone?: string;
  company_size?: string;
  message?: string;
  created_at?: string;
}

export function insertDemoRequest(req: DemoRequest) {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO demo_requests (name, company, email, phone, company_size, message)
    VALUES (@name, @company, @email, @phone, @company_size, @message)
  `);
  return stmt.run({
    name: req.name,
    company: req.company,
    email: req.email,
    phone: req.phone || "",
    company_size: req.company_size || "",
    message: req.message || "",
  });
}

export function getAllDemoRequests(): DemoRequest[] {
  const db = getDb();
  return db
    .prepare("SELECT * FROM demo_requests ORDER BY created_at DESC")
    .all() as DemoRequest[];
}
