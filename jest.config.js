// https://github.com/arcatdmz/nextjs-with-jest-typescript
module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  roots: ['<rootDir>/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
