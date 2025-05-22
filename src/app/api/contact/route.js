import nodemailer from 'nodemailer'

export async function POST(req) {
  const { name, email, message } = await req.json()

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_MAIL,
      pass: process.env.ZOHO_PASSWORD
    },
  })

  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
  <title>New Contact Message</title>
  </head>
  <body>
    <div style="background-color: #f1f5f9; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <div style="max-width: 620px; margin: auto; background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #0f172a; color: #ffffff; padding: 24px 32px;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 600;">📬 New Contact Message</h1>
          <p style="margin: 4px 0 0; font-size: 14px; color: #cbd5e1;">
            From your portfolio at <strong>buildwithparadox.com</strong>
          </p>
        </div>
        <div style="padding: 32px; color: #1e293b; text-align: center;">
          <div style="margin-bottom: 24px;">
            <img 
              src="https://res.cloudinary.com/deduj0jrx/image/upload/v1747756705/myavatar_wgeyai.png" 
              alt="Contact Message" 
              style="width: 96px; height: 96px; border-radius: 50%; object-fit: cover; border: 3px solid #2563eb;"
            />
          </div>
          <p style="margin-bottom: 24px; font-size: 16px; line-height: 1.6; text-align: left;">
            Hello Paradox, someone just reached out through your portfolio contact form.
          </p>
          <div style="margin-top: 24px; border-radius: 10px; border: 1px solid #e2e8f0; background: #f9fafb; text-align: left;">
            <div style="padding: 20px 24px; border-bottom: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 14px; color: #475569;">
                👤 <strong>Name:</strong> <span style="color: #0f172a;">${name}</span>
              </p>
            </div>
            <div style="padding: 20px 24px; border-bottom: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 14px; color: #475569;">
                📧 <strong>Email:</strong>
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </p>
            </div>
            <div style="padding: 20px 24px;">
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #475569;">💬 <strong>Message:</strong></p>
              <div style="padding: 16px; background: #ffffff; border-left: 4px solid #2563eb; border-radius: 6px; font-size: 14px; color: #1e293b; white-space: pre-wrap;">
                ${message}
              </div>
            </div>
          </div>
          <div style="margin-top: 40px; font-size: 13px; color: #64748b; text-align: left;">
            <p style="margin-bottom: 4px;">🚀 Keep building and creating,</p>
            <strong style="display: block; color: #0f172a;">Paradox</strong>
            <span style="font-size: 12px;">Developer • Security Engineer • 3D Artist</span>
          </div>
        </div>
        <div style="background-color: #f9fafb; text-align: center; padding: 16px; font-size: 13px; color: #94a3b8;">
          &copy; ${new Date().getFullYear()} BuildWithParadox. All rights reserved.
        </div>
      </div>
    </div>
  </body>
  </html>
  `

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.ZOHO_MAIL}>`,
      to: process.env.ZOHO_MAIL,
      subject: `📨 New message from ${name}`,
      html: htmlContent,
    })

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 })
  } catch (error) {
    console.error('Email send error:', error)
    return new Response(JSON.stringify({ message: 'Failed to send message.' }), { status: 500 })
  }
}
