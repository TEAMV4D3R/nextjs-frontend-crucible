/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/* http://127.0.0.1:8000/api/v1/scraped_jobs/',
//         destination: 'http://localhost:3000/:path*'
//       }
//     ]
//   }
// }

