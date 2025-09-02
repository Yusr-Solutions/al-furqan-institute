import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: process.env.NODE_ENV === 'production' ? '/al-furqan-insitute' : '',
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
  /* config options here */
};

export default nextConfig;
