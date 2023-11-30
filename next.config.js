/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  basePath: '/my-app',
  assetPrefix: '/my-app/',
}

module.exports = nextConfig
