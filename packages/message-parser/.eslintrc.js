module.exports = {
  extends: '@quickchat.vn/eslint-config-alt/minimal',
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: '@quickchat.vn/eslint-config-alt/typescript',
    },
  ],
};
