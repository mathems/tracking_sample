import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    displayName: 'spec',
    rootDir: '../src',
    preset: 'ts-jest',
  };
};
