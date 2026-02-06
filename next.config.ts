import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
    experimental: {
      serverActions: {
        allowedOrigins: [
          "*.orchids.cloud", 
          "*.proxy.daytona.works",
          "3000-0f6b4f06-561d-498e-80f7-aa247432fe2d.orchids.cloud",
          "3000-0f6b4f06-561d-498e-80f7-aa247432fe2d.proxy.daytona.works",
          "jeet-rajyaguru.vercel.app"
        ]
      }
    },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
// Orchids restart: 1767610315488
