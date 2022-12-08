/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net','downloads.ctfassets.net'],
    deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: { images: { layoutRaw: true } }
}

module.exports = nextConfig
