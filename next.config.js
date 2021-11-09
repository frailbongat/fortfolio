const withPWA = require('next-pwa')

module.exports = withPWA({
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    publicExcludes: ['!robots.txt', '!sitemap.xml.gz'],
    disable: process.env.NODE_ENV === 'development',
  },
})
