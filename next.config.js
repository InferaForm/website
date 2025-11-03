/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  // Removed 'output: export' to enable API routes on Vercel
};

module.exports = nextConfig;

