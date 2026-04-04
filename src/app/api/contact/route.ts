import { NextResponse } from 'next/server';

interface ContactFormData {
  fullName: string;
  jobTitle?: string;
  companyName: string;
  email: string;
  phone?: string;
  services?: string[];
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactFormData;

    // Validate required fields
    const { fullName, companyName, email } = body;

    if (!fullName || !companyName || !email) {
      return NextResponse.json(
        {
          error: 'Missing required fields: fullName, companyName, and email are required.',
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // Build the HTML email body
    const htmlBody = generateEmailHTML(body);

    // Get API key from environment variables
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Email service is not properly configured.' },
        { status: 500 }
      );
    }

    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Aston FM Website <onboarding@resend.dev>',
        to: 'info@astongroupuae.com',
        subject: `New Enquiry from ${fullName} at ${companyName}`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json() as { message?: string };
      console.error('Resend API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: response.status }
      );
    }

    const data = await response.json() as { id?: string };
    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been sent successfully. We will get back to you soon.',
        emailId: data.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
        { status: 500 }
      );
  }
}

function generateEmailHTML(data: ContactFormData): string {
  const { fullName, jobTitle, companyName, email, phone, services, message } = data;

  const servicesHTML = services && services.length > 0
    ? `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #0d1b2a;">
        <strong>Services Interested In:</strong>
      </td>
    </tr>
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563;">
        ${services.map(s => `<span style="display: inline-block; background: #f0f9f7; color: #00b67a; padding: 4px 12px; border-radius: 4px; margin-right: 8px; margin-bottom: 8px; font-size: 14px;">${escapeHtml(s)}</span>`).join('')}
      </td>
    </tr>
    `
    : '';

  const phoneHTML = phone
    ? `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
        <strong style="color: #0d1b2a;">Phone:</strong> <span style="color: #4b5563;">${escapeHtml(phone)}</span>
      </td>
    </tr>
    `
    : '';

  const jobTitleHTML = jobTitle
    ? `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
        <strong style="color: #0d1b2a;">Job Title:</strong> <span style="color: #4b5563;">${escapeHtml(jobTitle)}</span>
      </td>
    </tr>
    `
    : '';

  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        background-color: #f9fafb;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      .header {
        background: linear-gradient(135deg, #0d1b2a 0%, #00b67a 100%);
        padding: 30px;
        color: #ffffff;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
        font-weight: 700;
      }
      .header p {
        margin: 8px 0 0 0;
        font-size: 14px;
        opacity: 0.9;
      }
      .content {
        padding: 30px;
      }
      .content h2 {
        color: #0d1b2a;
        font-size: 18px;
        margin: 0 0 20px 0;
        border-bottom: 2px solid #00b67a;
        padding-bottom: 10px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 30px;
      }
      td {
        padding: 12px 0;
        border-bottom: 1px solid #e5e7eb;
      }
      td strong {
        color: #0d1b2a;
        display: inline-block;
        min-width: 140px;
      }
      td span {
        color: #4b5563;
      }
      .message-box {
        background-color: #f9fafb;
        border-left: 4px solid #00b67a;
        padding: 16px;
        border-radius: 4px;
        margin-bottom: 20px;
      }
      .message-box p {
        margin: 0;
        color: #4b5563;
        line-height: 1.6;
        word-wrap: break-word;
      }
      .footer {
        background-color: #f9fafb;
        padding: 20px 30px;
        text-align: center;
        border-top: 1px solid #e5e7eb;
        font-size: 12px;
        color: #6b7280;
      }
      .cta-button {
        display: inline-block;
        background-color: #00b67a;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 600;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>New Enquiry Received</h1>
        <p>From Aston FM Website</p>
      </div>

      <div class="content">
        <h2>Contact Information</h2>
        <table>
          <tr>
            <td>
              <strong style="color: #0d1b2a;">Name:</strong> <span style="color: #4b5563;">${escapeHtml(fullName)}</span>
            </td>
          </tr>
          ${jobTitleHTML}
          <tr>
            <td>
              <strong style="color: #0d1b2a;">Company:</strong> <span style="color: #4b5563;">${escapeHtml(companyName)}</span>
            </td>
          </tr>
          <tr>
            <td>
              <strong style="color: #0d1b2a;">Email:</strong> <span style="color: #4b5563;"><a href="mailto:${escapeHtml(email)}" style="color: #00b67a; text-decoration: none;">${escapeHtml(email)}</a></span>
            </td>
          </tr>
          ${phoneHTML}
          ${servicesHTML}
        </table>

        <h2>Message</h2>
        <div class="message-box">
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        </div>
      </div>

      <div class="footer">
        <p>This is an automated notification from the Aston FM website contact form.</p>
        <p>&copy; 2026 Aston Group UAE. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
  `.trim();
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
