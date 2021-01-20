module.exports = {
  extends: ['stylelint-config-recommended','stylelint-prettier/recommended'],
  rules: {
    'at-rule-no-unknown': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
    'block-no-empty': null,
    'unit-whitelist': ['em', 'rem', 's'],
  },
}
