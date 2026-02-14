/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false, // ✅ Habilitada optimización de imágenes
    formats: ['image/avif', 'image/webp'], // ✅ AVIF es más eficiente que WebP
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuración vacía de Turbopack para silenciar warnings
  turbopack: {},
  // Optimizaciones de rendimiento
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // ✅ Optimización de módulos externos para reducir bundle size
  experimental: {
    optimizeCss: true, // Optimizar CSS
    optimizePackageImports: ['framer-motion', 'lucide-react', 'react-icons'], // Tree-shaking
  },
  
  // Headers de caché para recursos estáticos
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/public/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/img/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
