/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuración vacía de Turbopack para silenciar warnings
  turbopack: {},
  // Optimizaciones de rendimiento
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Optimización de fuentes
  optimizeFonts: true,
}

module.exports = nextConfig
