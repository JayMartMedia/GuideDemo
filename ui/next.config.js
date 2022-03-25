/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GRAPHQL_API_URI: 'http://localhost:4000/graphql'
  }
}

module.exports = nextConfig
