/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `The Abacus`,
    siteUrl: `https://www.theabacus.in/`
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-layout`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: null,
        sitemap: 'https://www.theabacus.in/sitemap.xml',
        policy: [{userAgent: '*', allow: '/', disallow: ["/static/js/"]}]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: process.env.GOOGLE_TAG,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Abacus`,
        short_name: `the abacus`,
        start_url: `/`,
        icon: `src/images/small_logo.svg`,
      },
    },
    `gatsby-plugin-client-side-redirect`
  ]
};
