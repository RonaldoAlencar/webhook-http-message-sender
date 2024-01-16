/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.entity.{ts,js,jsx}',
    '**/*.repository.{ts,js,jsx}',
    '**/*.use-case.{ts,js,jsx}',
    '**/*.domain-service.{ts,js,jsx}',
    '**/*.adapter.{ts,js,jsx}',
    '**/*.gateway.{ts,js,jsx}',
    '**/*.service.{ts,js,jsx}',
    '**/*.controller.{ts,js,jsx}',
    '**/*.mapper.{ts,js,jsx}',
    '**/*.value-object.{ts,js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/dist/**',
    '!**/coverage/**',
    '!**/infra/**',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
