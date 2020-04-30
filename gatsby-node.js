/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require('dotenv').config()
const path = require('path')
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
          test: /\.(ts|tsx)?$/,
          options: {
            fix: true,
          },
        },
      ],
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(resolve => {
    graphql(`
      {
        allMicrocmsContent {
          edges {
            node {
              contentId
            }
          }
        }
      }
    `).then(result => {
      const template = path.resolve(`./src/templates/contents.tsx`)
      result.data.allMicrocmsContent.edges.forEach(edge => {
        const node = edge.node
        const path = `/contents/${node.contentId}`
        createPage({
          path: path,
          component: template,
          context: {
            contentId: node.contentId,
          },
        })
      })
      resolve()
    })
  })
}
