/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/python/:path*',        // When frontend asks for /api/python...
        destination: 'http://127.0.0.1:8000/:path*', // ...send it to backend port 8000
      },
    ]
  },
}

module.exports = nextConfig