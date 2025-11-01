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
  swcMinify: true,
  webpack: (config: Configuration): Configuration => {
    (config.resolve as any).fallback = {
      ...(config.resolve as any).fallback,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
