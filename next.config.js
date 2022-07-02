/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    api: 'http://localhost:3005'
  },
  async rewrites() {
    return [
      {
        source: '/promo',
        destination: '/',
      },
    ]
  }
}

module.exports = nextConfig
