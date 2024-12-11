import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net',
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/top',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
