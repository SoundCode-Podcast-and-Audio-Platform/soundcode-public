/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deploy as a normal Next.js app on Vercel (uses `.next`, not static `out/`).
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
