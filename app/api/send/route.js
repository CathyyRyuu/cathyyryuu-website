// import { EmailTemplate } from '../../../components/EmailTemplate';
import React from 'react';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = await req.json();
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: "Cathy <mail@info.ryuu.tech>",
      to: ["cathyliu0315@hotmail.com"],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for connecting!</p>
          <p>New message submitted.</p>
          <p>{message}</p>
          <p>I will be in touch with you soon!</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
