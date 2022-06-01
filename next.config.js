/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: '/',
    formats: ['image/avif', 'image/webp']
  }
}

// const { withSuperjson } = require('next-superjson')

module.exports = nextConfig
