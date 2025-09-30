// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        allowDefaultProject: true,
      },
    },
    rules: {
      'no-console': 'off',
      'dot-notation': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
  {
    ignores: ['dist', 'node_modules', 'eslint.config.mjs', 'jest.config.cjs'],
  },
);
