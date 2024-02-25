/** @type {import('jest').Config} */
const config = {
  globals: {
    __DEV__: true,
    maxWorkers: '50%',
    maxConcurrency: '5'
  },
  displayName: {
    name: 'API-NODE-EXPRESS',
    color: 'blueBright',
  },
  bail: 1,
  verbose: true,
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/server.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};

module.exports = config;