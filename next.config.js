/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  // Private cold-outreach previews: never indexed, even if a link leaks.
  async headers() {
    return [{ source: '/for/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }]
  },
  // Removed 'output: export' to enable API routes on Vercel
};

module.exports = nextConfig;

