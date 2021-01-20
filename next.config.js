/* eslint-disable */
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  webpack(config, { dev }) {
    if (dev) {
      // config.plugins.push(
      //   new StyleLintPlugin({
      //     configFile: './.stylelintrc.js',
      //     files: ['./styles/**/*.css', './styles/**/*.scss'],
      //     emitErrors: false,
      //     fix: true,
      //   })
      // )
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
