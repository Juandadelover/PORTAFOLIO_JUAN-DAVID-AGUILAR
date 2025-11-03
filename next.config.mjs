/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! ADVERTENCIA !!
    // Permite que las builds de producción se completen incluso si hay errores de tipos.
    // Esto es temporal hasta que se resuelvan los errores de tipos.
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    // Configuración para el cliente
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
        path: false,
        os: false,
      };
    }

    // Manejo de módulos externos
    if (isServer) {
      config.externals = [...(config.externals || []), 'framer-motion'];
    }

    // Optimizaciones adicionales de webpack
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
    };
  },
  // Experimental features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
