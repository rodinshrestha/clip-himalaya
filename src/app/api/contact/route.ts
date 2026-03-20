import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { client } from '@/sanity/client';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Save to Sanity
    await client.create({
      _type: 'contactSubmission',
      name,
      email,
      phone,
      message,
      isRead: false,
    });

    // Send email notification to admin (best-effort, don't block success)
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_EMAIL;

      await transporter.sendMail({
        from: `"Clip Himalaya" <${process.env.SMTP_EMAIL}>`,
        to: adminEmail,
        subject: `New Inquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #1a1a1a; padding: 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Inquiry</h1>
            </div>
            <div style="padding: 32px 24px; background-color: #f9f9f9;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 130px; color: #333;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">
                    <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">
                    <a href="tel:${phone}" style="color: #2563eb;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; color: #333; vertical-align: top;">Message</td>
                  <td style="padding: 12px 0; color: #555; line-height: 1.6;">${message}</td>
                </tr>
              </table>
            </div>
            <div style="padding: 16px 24px; background-color: #1a1a1a; text-align: center;">
              <p style="color: #999; font-size: 12px; margin: 0;">This is an automated notification from Clip Himalaya website.</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit inquiry' },
      { status: 500 }
    );
  }
}
