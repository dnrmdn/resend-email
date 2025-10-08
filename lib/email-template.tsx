export function getResetPasswordEmailHtml({
  email,
  resetUrl,
}: {
  email: string;
  resetUrl: string;
}): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Your Password</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f4f5; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.05); overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background-color:#18181b; padding:24px; text-align:center;">
                <h1 style="color:#ffffff; margin:0; font-size:22px;">Reset Your Password</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px 40px; color:#333333; font-size:16px; line-height:1.6;">
                <p>Hi <strong>${email}</strong>,</p>
                <p>We received a request to reset your password. Click the button below to set a new password.</p>

                <p style="text-align:center; margin:32px 0;">
                  <a href="${resetUrl}"
                    style="background-color:#3b82f6; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:600; display:inline-block;">
                    Reset Password
                  </a>
                </p>

                <p>If you didn’t request this, you can safely ignore this email.</p>
                <p>For your security, this link will expire in <strong>30 minutes</strong>.</p>

                <hr style="border:none; border-top:1px solid #e5e7eb; margin:24px 0;" />
                <p style="font-size:13px; color:#6b7280;">If the button doesn’t work, copy and paste this link into your browser:</p>
                <p style="font-size:13px; color:#3b82f6; word-break:break-all;">${resetUrl}</p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#f9fafb; padding:16px; text-align:center; font-size:12px; color:#9ca3af;">
                © ${new Date().getFullYear()} Your Company. All rights reserved.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
