import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "./generated/prisma";
import { getResetPasswordEmailHtml } from "./email-template";
import { fromEmail, resend } from "./resend";

const prisma = new PrismaClient();


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // bisa juga mysql dll
  }),

  emailAndPassword: {
    enabled: true,

    sendResetPassword: async ({ user, url }) => {
      try {
        // ✅ buat HTML email
        const emailHtml = getResetPasswordEmailHtml({
          email: user.email,
          resetUrl: url,
        });

        // ✅ kirim email via Resend
        const { data, error } = await resend.emails.send({
          from: fromEmail,
          to: user.email,
          subject: "Reset your password",
          html: emailHtml,
        });

        if (error) {
          console.error("❌ Failed to send reset password email:", error);
          throw new Error("Failed to send reset password email");
        }

        if (!data) {
          throw new Error("No data returned from Resend API");
        }

        console.log("✅ Reset password email sent to:", user.email);
        console.log("📨 Email ID:", data.id);

        // Log URL di mode dev
        if (process.env.NODE_ENV === "development") {
          console.log("🔗 Reset URL (dev only):", url);
        }
      } catch (err) {
        console.error("🔥 Error in sendResetPassword:", err);
        throw err;
      }
    },
  },
});
