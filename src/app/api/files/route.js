import db from '@/lib/db';
import { NextResponse } from 'next/server';

// GET all files
export async function GET() {
  const files = db.prepare('SELECT * FROM files').all();
  return NextResponse.json(files);
}

// POST a new file
export async function POST(request) {
  const body = await request.json();
  const { title, category, location, tags, notes } = body;

  const result = db
    .prepare(
      `
    INSERT INTO files (title, category, location, tags, notes)
    VALUES (?, ?, ?, ?, ?)
  `,
    )
    .run(title, category, location, tags, notes);

  return NextResponse.json({
    id: result.lastInsertRowid,
    title,
    category,
    location,
    tags,
    notes,
  });
}
