module.exports = {
  preset: 'react-native',
  testRegex: '(/__tests__/.*|(\\.|/))test.[jt]sx?$',
  cacheDirectory: './cache',
  coveragePathIgnorePatterns: [
    './app/utils/vendor',
    './app/assets/images',
    './app/components/styles',
    './app/screens/styles',
    './app/stories',
    './app/themes',
    './storybook',
    './app/config',
    './__tests__/screens',
  ],
  setupFiles: [
    './jestSetupFile.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 90,
      lines: 90,
      statements: 80,
    },
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/__tests__/__mocks__/mockFirebase.js',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!react-native|react-native-dev-menu|rollbar-react-native|static-container|react-navigation|@react-navigation/.*|@react-native-community|react-native-gesture-handler)',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__tests__/__mocks__/svgMock.js',
  },
}
