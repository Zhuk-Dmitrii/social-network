import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^.+\\.svg': '<rootDir>/tests/mocks/svgMock.tsx',
  },
  // to obtain access to the matchers.
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
    '^.+\\.(js|jsx)$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            jsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
}

export default config
