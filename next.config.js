/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    serverActions: {}, // ✅ ahora debe ser un objeto, no un booleano
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
