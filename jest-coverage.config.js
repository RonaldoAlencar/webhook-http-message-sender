/* eslint-disable @typescript-eslint/no-var-requires */
const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testEnvironment: 'node',
    testRegex: '.spec.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
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
            statements: 100,
        },
    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
};
