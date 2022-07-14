const { redirect } = require('next/dist/server/api-utils')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/welcome',
        has: [
          {
            type: 'cookie',
            key: 'qid'
          }
        ],
        permanent: true,
        destination: '/'
      },
      {
        source: '/login',
        has: [
          {
            type: 'cookie',
            key: 'qid'
          }
        ],
        permanent: true,
        destination: '/'
      }
    ]
  },
  reactStrictMode: true,
  env: {
    api: 'http://localhost:3005'
  },

}

module.exports = nextConfig
