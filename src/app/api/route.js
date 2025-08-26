import { NextResponse } from 'next/server';

export async function GET() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    return NextResponse.json(
      { error: 'La variable de entorno NEXT_PUBLIC_API_URL no está definida.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ apiUrl });
}
