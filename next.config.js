/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Keep the page light: no image CDN needed (no raster images used at all).
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
