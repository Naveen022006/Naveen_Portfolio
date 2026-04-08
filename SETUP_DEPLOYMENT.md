# 🚀 Setup & Deployment Guide

## Local Development Setup

### 1. Install Dependencies
```bash
npm install
```
This will install all packages including the newly added **Resend** package.

### 2. Environment Variables Already Set ✅
Your `.env` file is already configured with:
```
RESEND_API_KEY=re_ibaXhrV9_LeEyTuUoqJWbwRfvnDNEHKWs
CONTACT_EMAIL_FROM=noreply@naveen-portfolio.com
CONTACT_EMAIL_TO=kanagunaveen21@gmail.com
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Test Contact Form
- Scroll to the Contact section
- Fill in and submit a test message
- Check your email (kanagunaveen21@gmail.com) for:
  - Admin notification with submission details
  - Confirmation sent to sender's email

---

## What Was Fixed

✅ **Added Resend to package.json** - Email service dependency  
✅ **Fixed TypeScript errors** - space-scene.tsx material casting  
✅ **API endpoint ready** - `/api/contact` with Resend integration  
✅ **Contact component** - Beautiful two-column form layout  

---

## Deployment to Vercel

### Option 1: Using Vercel CLI (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Using Git (GitHub/GitLab/Bitbucket)
1. Push your code to GitHub:
```bash
git add .
git commit -m "Add contact section with Resend email integration"
git push origin main
```

2. Go to [https://vercel.com/import](https://vercel.com/import)
3. Select your repository
4. Click "Import"

### Option 3: Manual Deployment
1. Go to [https://vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from Git
4. Select your portfolio repository
5. Click "Deploy"

---

## Vercel Environment Variables Setup

After deploying to Vercel, you need to add environment variables:

1. **Go to Vercel Dashboard** → Select your project
2. **Settings** → **Environment Variables**
3. **Add the following:**

| Variable | Value |
|----------|-------|
| `RESEND_API_KEY` | `re_ibaXhrV9_LeEyTuUoqJWbwRfvnDNEHKWs` |
| `CONTACT_EMAIL_FROM` | `noreply@naveen-portfolio.com` |
| `CONTACT_EMAIL_TO` | `kanagunaveen21@gmail.com` |

4. **Click "Save"** and **Redeploy**

---

## Verify Email Service on Vercel

1. Go to your deployed URL
2. Scroll to the Contact section
3. Submit a test message
4. Check your email for:
   - ✉️ Admin notification at kanagunaveen21@gmail.com
   - ✉️ Confirmation email at sender's address

---

## Troubleshooting

### Issue: "Build failed" on Vercel
**Solution:** 
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify `package.json` has resend dependency

### Issue: Form submission returns error
**Solution:**
- Verify API key in `.env` is correct
- Check browser console for error messages
- Ensure Resend account is active

### Issue: Emails not received
**Solution:**
- Check spam/junk folder
- Verify email addresses in `.env`
- Test with Resend dashboard directly

---

## Key Files

| File | Purpose |
|------|---------|
| `.env` | Environment variables (API keys) |
| `app/api/contact/route.ts` | Backend email API |
| `components/contact-section.tsx` | Contact form component |
| `app/page.tsx` | Main page with all sections |

---

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Test locally
4. ✅ Deploy to Vercel
5. ✅ Set environment variables
6. ✅ Test on production

---

## Support

- 📚 [Resend Docs](https://resend.com/docs)
- 🚀 [Vercel Docs](https://vercel.com/docs)
- 📧 [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

**Status:** ✅ **Ready for Deployment**
