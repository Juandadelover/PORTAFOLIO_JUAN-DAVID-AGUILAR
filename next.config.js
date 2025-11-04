/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuración vacía de Turbopack para silenciar warnings
  turbopack: {},
}

module.exports = nextConfig
