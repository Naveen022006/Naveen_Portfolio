import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const contactEmailTo = process.env.CONTACT_EMAIL_TO || 'kanagunaveen21@gmail.com'
    const contactEmailFrom = process.env.CONTACT_EMAIL_FROM || 'noreply@naveen-portfolio.com'

    // Send email to admin (you)
    await resend.emails.send({
      from: contactEmailFrom,
      to: contactEmailTo,
      subject: `New Message from ${name} - Portfolio Contact Form`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 8px 8px 0 0; color: white;">
            <h1 style="margin: 0; font-size: 24px;">🎉 New Contact Form Submission</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px;">
            <div style="margin-bottom: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 20px;">
              <p style="margin: 0 0 10px 0; color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Sender Information</p>
              <p style="margin: 10px 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0; color: #666; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #667eea; border-radius: 4px;">
                <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #f0f0f0; text-align: center; color: #999; font-size: 12px;">
              <p style="margin: 0;">Sent from Naveen's Portfolio Contact Form</p>
              <p style="margin: 5px 0 0 0;">${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    })

    // Send confirmation email to visitor
    await resend.emails.send({
      from: contactEmailFrom,
      to: email,
      subject: 'Thanks for reaching out! - Naveen K',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 8px 8px 0 0; color: white;">
            <h1 style="margin: 0; font-size: 24px;">Thanks for Reaching Out! 👋</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0 0 20px 0; color: #333; font-size: 16px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
            
            <p style="margin: 0 0 20px 0; color: #555; font-size: 15px; line-height: 1.6;">
              Thank you for contacting me! I've received your message and I'll get back to you as soon as possible, usually within 24-48 hours.
            </p>
            
            <div style="background-color: #f0f4ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0 0 10px 0; color: #667eea; font-weight: bold; font-size: 14px;">Your Message Summary:</p>
              <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.5; white-space: pre-wrap; word-wrap: break-word;">${message}</p>
            </div>
            
            <p style="margin: 20px 0; color: #555; font-size: 15px; line-height: 1.6;">
              In the meantime, feel free to connect with me on:
            </p>
            
            <div style="margin: 20px 0; text-align: center;">
              <a href="https://github.com/Naveen022006" style="display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none; font-weight: 600;">GitHub</a>
              <a href="https://www.linkedin.com/in/naveen-k-bb11372a5" style="display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none; font-weight: 600;">LinkedIn</a>
              <a href="https://www.instagram.com/naveen_k_2102" style="display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none; font-weight: 600;">Instagram</a>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #f0f0f0; text-align: center; color: #999; font-size: 12px;">
              <p style="margin: 0;">Best regards,</p>
              <p style="margin: 5px 0 0 0;"><strong>Naveen K</strong> - Full Stack Developer</p>
            </div>
          </div>
        </div>
      `,
    })

    console.log('✅ Emails sent successfully to', contactEmailTo)

    return NextResponse.json(
      { 
        message: 'Message sent successfully! I will get back to you soon. Check your email for confirmation.',
        status: 'success'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact me directly.' },
      { status: 500 }
    )
  }
}
