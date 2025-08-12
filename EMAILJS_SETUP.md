# EmailJS Setup Guide

To make the contact form functional and send emails to `ayogenth@uwo.ca`, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Body:**
```
Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Configuration
Open `lib/emailjs-config.ts` and replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id_here',
  TEMPLATE_ID: 'your_actual_template_id_here', 
  PUBLIC_KEY: 'your_actual_public_key_here',
  TO_EMAIL: 'ayogenth@uwo.ca'
}
```

## Step 6: Test the Form
1. Start your development server: `pnpm dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email at `ayogenth@uwo.ca`

## Features Added
- ✅ Form validation
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Form reset after successful submission
- ✅ Disabled form during submission
- ✅ Automatic message clearing after 5 seconds

## Free Tier Limits
- EmailJS free tier allows 200 emails per month
- Perfect for a portfolio website

## Troubleshooting
- Make sure all IDs are correct in the config file
- Check browser console for any errors
- Verify your email service is properly connected in EmailJS dashboard
