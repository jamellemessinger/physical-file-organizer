import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function DELETE(request, context) {
const params = await context.params;

  const id = Number(params.id);

  const result = db.prepare('DELETE FROM files WHERE id = ?').run(id);

  if (result.changes === 0) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
