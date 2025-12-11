/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Redirect configuration
  async redirects() {
    return [
      // ==============================================================================
      // SCENARIO 1: Redirect ENTIRE SITE to a new domain
      // Use this if you are migrating from old-site.com to new-site.com
      // ==============================================================================
      /*
      {
        source: '/:path*', // Matches every page on the site
        destination: 'https://www.new-domain.com/:path*', // Sends them to the same path on new domain
        permanent: true, // 301 Redirect (SEO Juice transferred)
      },
      */
      // ==============================================================================
      // SCENARIO 2: Redirect ALL pages within a specific folder
      // Use this if you renamed a section (e.g., changing /blog to /articles)
      // ==============================================================================
      /*
      {
        source: '/blog/:slug*', // Matches /blog/anything
        destination: '/articles/:slug*', // Sends to /articles/anything
        permanent: true,
      },
      */
      // ==============================================================================
      // SCENARIO 3: Maintenance Mode (Redirect ALL pages to one page)
      // Use this to force everyone to a "Coming Soon" or "Maintenance" page
      // ==============================================================================
      /*
      {
        source: '/((?!maintenance).*)', // Matches everything EXCEPT '/maintenance' to prevent infinite loop
        destination: '/maintenance',
        permanent: false, // 302 Temporary Redirect (Important for SEO so Google doesn't de-index you)
      },
      */
    ];
  },
};

module.exports = nextConfig;
