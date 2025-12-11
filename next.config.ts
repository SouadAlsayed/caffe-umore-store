import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gpfudbczlshwahrrvcob.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/products/**',
      },
    ],
  },
};

export default nextConfig;
