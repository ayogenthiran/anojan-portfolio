// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // You'll need to replace this with your actual EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // You'll need to replace this with your actual EmailJS template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // You'll need to replace this with your actual EmailJS public key
  TO_EMAIL: 'ayogenth@uwo.ca'
}

// Email template parameters
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string
  from_email: string
  message: string
  to_email: string
}
