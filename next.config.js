/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Clean static URLs on Vercel / static hosts
  trailingSlash: true,
};

module.exports = nextConfig;
