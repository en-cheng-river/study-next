import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'dist',
  reactStrictMode: false,
  /* 重定向
   *  redirects in next.config.js
   * */
  // async redirects() {
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/concatUs',
  //       permanent: false,
  //     },
  //   ];
  // },
};

export default nextConfig;
