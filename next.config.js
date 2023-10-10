/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/maps',
            destination: 'https://maps.catenarymaps.org',
            permanent: true,
          },
          {
            source: '/map',
            destination: 'https://maps.catenarymaps.org',
            permanent: true,
          },
        ]
      }
}

module.exports = nextConfig
