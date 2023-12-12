import createMiddleware from 'next-intl/middleware'

import getLocales from './lib/getLocales'

export default createMiddleware({
    // A list of all locales that are supported
    locales: getLocales(),

    // Used when no locale matches
    defaultLocale: 'en',
})

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(jp|en)/:path*'],
}
