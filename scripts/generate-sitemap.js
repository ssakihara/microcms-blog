/* eslint-disable */
const sitemap = require('nextjs-sitemap-generator')
const fs = require('fs')

const BUILD_ID = fs.readFileSync('.next/BUILD_ID').toString()

sitemap({
  baseUrl: 'https://ssakihara.com',
  pagesDirectory: __dirname + '/../.next/serverless/pages',
  targetDirectory: 'out/',
  ignoredExtensions: ['js', 'map'],
  ignoredPaths: ['[fallback]', '404'],
})
