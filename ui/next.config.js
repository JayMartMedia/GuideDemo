/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GRAPHQL_API_URI: 'https://guide-demo-js.herokuapp.com/graphql'
  }
}

module.exports = nextConfig
