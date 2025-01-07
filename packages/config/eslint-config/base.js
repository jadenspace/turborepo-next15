import js from '@eslint/js';
import unusedImports from 'eslint-plugin-unused-imports';
import turboPlugin from 'eslint-plugin-turbo';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';

/**
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  {
    name: 'Config ESLint',
    ...js.configs.recommended,
    rules: {
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
    },
  },
  {
    name: 'Config Prettier',
    ...eslintPluginPrettierRecommended,
  },
  {
    name: 'Config LanguageOption',
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    name: 'Config import plugin',
    ...importPlugin.flatConfigs.recommended,
    rules: {
      'import/no-named-as-default': 'off',
      'import/order': [
        'error',
        {
          warnOnUnassignedImports: true,
          groups: [
            'builtin',
            'external',
            'internal',
            'object',
            ['parent', 'sibling', 'index'],
            'type',
            'unknown',
          ],
          pathGroups: [
            {
              pattern: 'react*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '{.,..,@,*}/**/*.+(css|sass|less|scss|pcss|styl|svg)',
              group: 'unknown',
              position: 'after',
            },
          ],
          alphabetize: {
            order: 'desc',
          },
          pathGroupsExcludedImportTypes: ['type'],
        },
      ],
    },
  },
  {
    name: 'Config unused import plugin',
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    name: 'Config turbo plugin',
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': [
        'warn',
        {
          allowList: ['NEXT_PUBLIC_*'],
        },
      ],
    },
  },
  {
    name: 'Config ignore patterns',
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'storybook-static'],
  },
];
