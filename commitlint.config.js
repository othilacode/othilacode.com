module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 120],
    'scope-case': [2, 'always', 'upper-case'],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};
