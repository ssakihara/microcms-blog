/* eslint-disable */
require('dotenv').config()
module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_APP_URL,
    title: `しんのすけのメモ帳`,
    description: `駆け出しエンジニアの備忘録的な技術ブログ`,
    author: `@sshinnosuke0524`,
    lang: 'ja',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
        head: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-typescript-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/example.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.GATSBY_MICROCMS_X_API_KEY,
        serviceId: process.env.GATSBY_MICROCMS_SERVICE_ID,
        endpoint: 'content',
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.GATSBY_MICROCMS_X_API_KEY,
        serviceId: process.env.GATSBY_MICROCMS_SERVICE_ID,
        endpoint: 'category',
      },
    },
  ],
}
/* eslint-enable */
