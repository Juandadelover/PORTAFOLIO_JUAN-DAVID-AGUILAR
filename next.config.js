/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  trailingSlash: true,
  images: {
    domains: ['github.com'],
    unoptimized: true,
  },
  // Asegurarse de que Next.js maneje correctamente la hidratación
  webpack: (config, { dev, isServer }) => {
    // Asegurarse de que webpack maneje correctamente los módulos
    config.resolve.fallback = { fs: false };
    
    return config;
  },
}

module.exports = nextConfig