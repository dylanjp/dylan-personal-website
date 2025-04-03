/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Ensures paths work correctly on GitHub Pages
  assetPrefix: './', // Ensure assets load correctly
};

export default nextConfig;