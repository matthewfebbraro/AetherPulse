// app/api/send-registration-email/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { sendRegistrationEmail } from '@/lib/email/sendRegistrationEmail';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, username } = body;

  if (!email || !username) {
    return NextResponse.json({ error: 'Missing email or username' }, { status: 400 });
  }

  await sendRegistrationEmail(email, username);

  return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
}
