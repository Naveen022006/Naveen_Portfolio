# 📧 Resend Email Setup Guide

## Getting Your Resend API Key

### Step 1: Create Resend Account
1. Visit [https://resend.com](https://resend.com)
2. Click "Sign Up" and create an account
3. Verify your email

### Step 2: Create API Key
1. Go to the [Resend Dashboard](https://dashboard.resend.com)
2. Navigate to **API Keys** in the left sidebar
3. Click **"Create API Key"**
4. Name it (e.g., "Portfolio Contact Form")
5. Copy the API key (starts with `re_`)

### Step 3: Configure Environment Variables
1. Open `.env.local` in your project root
2. Replace `your_resend_api_key_here` with your actual API key:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Installation

Already done! But if needed:
```bash
npm install resend
```

## Testing the Email Integration

1. Start your dev server:
```bash
npm run dev
```

2. Open your portfolio at `http://localhost:3000`

3. Go to the Contact section

4. Fill in the form and submit

5. Check:
   - ✅ Your email (kanagunaveen21@gmail.com) for the admin notification
   - ✅ The sender's email for the confirmation message

## Important Notes

### Free Resend Account
- You can send **100 emails per day** free
- Emails are sent from `noreply@naveen-portfolio.com` (free tier limitation)
- To use a custom domain, you'll need to verify it in Resend dashboard

### Domain Verification (Optional)
To send from a custom domain:
1. Go to Resend Dashboard → Domains
2. Add your domain
3. Follow DNS verification steps
4. Update `CONTACT_EMAIL_FROM` in `.env.local`

## Features Implemented

✅ **Email to You (Admin)**
- Receives full contact submission details
- Beautiful formatted email with sender info
- Timestamp included

✅ **Confirmation Email to Visitor**
- Thanks them for reaching out
- Repeats their message
- Includes your social links
- Professional branding

✅ **Error Handling**
- Validates all inputs
- Checks API key configuration
- Provides user-friendly error messages

## Troubleshooting

### Issue: "Email service not configured"
**Solution:** Ensure `RESEND_API_KEY` is set in `.env.local` and restart `npm run dev`

### Issue: Emails not sending
**Solution:** 
1. Check API key is valid in Resend dashboard
2. Verify `.env.local` file exists and has correct format
3. Check browser console for error messages
4. Restart dev server

### Issue: "Failed to send message"
**Solution:**
1. Check if API key is still valid (hasn't expired)
2. Verify email address format is correct
3. Check Resend dashboard for rate limiting
4. Try again after a few seconds

## Production Deployment

When deploying to Vercel:

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:
   - `RESEND_API_KEY` = your API key
   - `CONTACT_EMAIL_FROM` = noreply@naveen-portfolio.com
   - `CONTACT_EMAIL_TO` = kanagunaveen21@gmail.com
5. Redeploy your project

## Cost

- **Free Tier**: 100 emails/day forever
- **Pro Plan**: $20/month for unlimited emails
- For most portfolios, free tier is plenty!

---

Happy emailing! 🚀
