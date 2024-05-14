/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http://localhost:3000',
        port: '3000',
      },
    ],
  },
};

export default nextConfig;
