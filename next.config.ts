import type { NextConfig } from 'next';

// PAGES=1 construye el sitio estático para GitHub Pages, servido bajo /spirit-dance.
const BASE = process.env.PAGES ? '/spirit-dance' : '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: process.env.PAGES ? 'export' : undefined,
  basePath: BASE,
  images: { unoptimized: Boolean(process.env.PAGES) },
  env: { NEXT_PUBLIC_BASE_PATH: BASE },
};

export default nextConfig;
