/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zohhgbinjxkreodhsylf.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      // 👇 ADICIONADO O NOVO HOSTNAME AQUI 👇
      {
        protocol: 'https',
        hostname: 'user-gen-media-assets.s3.amazonaws.com',
      },
    ],
  },
};

module.exports = withPWA(nextConfig);

