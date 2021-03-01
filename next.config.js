/* eslint-disable */
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  webpack(config, { dev }) {
    if (dev) {
      config.plugins.push(
        new StyleLintPlugin({
          configFile: './.stylelintrc.js',
          files: ['./src/styles/**/*.css', './src/styles/**/*.scss'],
          emitErrors: false,
          fix: true,
        })
      )
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/', '/.next/', '/out/'],
        enforce: 'pre',
        options: {
          fix: true,
        },
      })
    }
    return config
  },
}
