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
          {
            source: '/status',
            destination: 'http://localhost:5842/public-dashboards/88133c635c5c44748691575081b52cae',
            permanent: false
          }
        ]
      }
}

module.exports = nextConfig
