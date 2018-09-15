const toBeIgnored = ['node_modules'];

module.exports = {
  resolver: 'jest-webpack-resolver',
  collectCoverageFrom: ['src/**/*.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(s?css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFiles: ['jest-canvas-mock', require.resolve('./__mocks__/localstorageMock.js')],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  testPathIgnorePatterns: toBeIgnored,
  coveragePathIgnorePatterns: toBeIgnored,
};
