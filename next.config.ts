import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Abaikan error ESLint selama proses build (Vercel)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
