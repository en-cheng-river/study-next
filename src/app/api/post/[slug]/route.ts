import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug; // 'a', 'b', or 'c'
  console.log('slug', slug);
  return NextResponse.json({ slug });
}