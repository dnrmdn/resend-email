import { Resend } from "resend";

// Inisiasi resend email with API key
export const resend = new Resend(process.env.RESEND_API_KEY)

// Default sender email
export const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"