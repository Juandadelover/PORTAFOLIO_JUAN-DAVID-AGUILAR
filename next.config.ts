import type { NextConfig } from 'next';
// If 'webpack' types are not available in this environment, use a fallback 'any' type.
// Install @types/webpack or the webpack package for proper typings if needed.
type Configuration = any;

/** @type {import('next').NextConfig} */
interface WebpackOptions {
  dev?: boolean;
  isServer?: boolean;
  [key: string]: any;
}

type WebpackHandler = (config: Configuration, options?: WebpackOptions) => Configuration;

interface NextConfigTyped extends NextConfig {
  webpack?: WebpackHandler;
}

const nextConfig: NextConfigTyped = {
  reactStrictMode: true,
  webpack: (config: Configuration): Configuration => {
    if (!config.resolve) {
      config.resolve = {};
    }
    (config.resolve as any).fallback = {
      ...(config.resolve as any).fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    };
    return config;
  },
};

module.exports = nextConfig;
