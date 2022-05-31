/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: '/'
  }
}

const { withSuperjson } = require('next-superjson')

module.exports = withSuperjson()(nextConfig)
