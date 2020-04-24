/* eslint-disable */
require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: `Title`,
    description: `Description`,
    author: `@sshinnosuke0524`,
    lang: 'ja',
    sidebars: [
      {
        to: '/home',
        text: 'Home',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-material-ui`,
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
