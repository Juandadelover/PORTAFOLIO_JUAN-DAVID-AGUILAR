/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Habilitar características experimentales si es necesario
  },
  // Asegurarse de que Next.js maneje correctamente la hidratación
  webpack: (config, { dev, isServer }) => {
    // Asegurarse de que webpack maneje correctamente los módulos
    config.resolve.fallback = { fs: false };
    
    return config;
  },
}

module.exports = nextConfig