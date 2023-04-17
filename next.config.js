/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
    disableStaticImages: true
  }
}

module.exports = nextConfig
