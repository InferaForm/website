/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  output: 'export', // 👈 tells Next.js to build static HTML
};

module.exports = nextConfig;

