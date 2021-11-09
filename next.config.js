const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    publicExcludes: ['!robots.txt'],
    buildExcludes: [/middleware-manifest\.json$/],
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
})
