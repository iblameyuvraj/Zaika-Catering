# EmailJS Setup Guide

## Prerequisites
1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template

## Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## How to Get Your EmailJS Credentials

### 1. Service ID
1. Go to EmailJS Dashboard
2. Navigate to "Email Services"
3. Create a new service or use existing one
4. Copy the Service ID (format: `service_abc123`)

### 2. Template ID
1. Go to "Email Templates"
2. Create a new template or use existing one
3. Copy the Template ID (format: `template_xyz789`)

### 3. Public Key
1. Go to "Account" → "API Keys"
2. Copy your Public Key (format: `user_def456`)

## Email Template Variables

Your EmailJS template should include these variables:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{service_type}}` - Selected service type
- `{{message}}` - Customer's message
- `{{to_name}}` - Your business name

## Example Email Template

```
Subject: New Catering Inquiry from {{from_name}}

Hello,

You have received a new catering inquiry:

Name: {{from_name}}
Email: {{from_email}}
Service Type: {{service_type}}
Message: {{message}}

Please respond to this inquiry within 24 hours.

Best regards,
{{to_name}}
```

## Security Notes

- The environment variables are prefixed with `NEXT_PUBLIC_` because they need to be accessible on the client side
- These are public keys and are safe to expose in the frontend
- For additional security, consider implementing rate limiting and CAPTCHA

## Testing

1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out the form and submit
4. Check your email for the received message

## Troubleshooting

- Make sure all environment variables are set correctly
- Verify your EmailJS service is active
- Check the browser console for any error messages
- Ensure your email template variables match the ones used in the code 