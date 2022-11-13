import type { Config } from 'jest';

const config: Config = {
  //verbose: true,
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
  maxWorkers: 1,
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/', '/test/', '/src/lib/'],
};

export default config;
