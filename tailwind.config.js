module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false,
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      top: '#ebf5ff',
      contents: '#edf2f7',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      href: '#0f83fd',
    }),
    minHeight: {
      main: 'calc(100vh - 8rem)', // ヘッダーとフッター分を小さく
    },
    extend: {
      spacing: {
        ...[...Array(61)].reduce((m, _, i) => {
          m[`${i}`] = i / 2 + 'rem'
          return m
        }, {}),
      },
      width: {
        ...[...Array(61)].reduce((m, _, i) => {
          m[`${i}`] = i / 2 + 'rem'
          return m
        }, {}),
      },
      height: {
        ...[...Array(61)].reduce((m, _, i) => {
          m[`${i}`] = i / 2 + 'rem'
          return m
        }, {}),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
