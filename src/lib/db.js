import Database from 'better-sqlite3';

const db = new Database('db/database.db');

// Create tables (run once safely)
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS files (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    category TEXT,
    location TEXT,
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`,
).run();

export default db;
