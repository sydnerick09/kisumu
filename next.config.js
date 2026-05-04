/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow environment variables to be used on frontend
  env: {
    PAYSTACK_PUBLIC: process.env.PAYSTACK_PUBLIC,
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
  },

  // Optional: improves deployment stability
  swcMinify: true
};

module.exports = nextConfig;