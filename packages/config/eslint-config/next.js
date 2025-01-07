import pluginNext from '@next/eslint-plugin-next';
import { config as reactInternalConfig } from './react-internal.js';
import { config as baseConfig } from './base.js';

/**
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  ...baseConfig,
  ...reactInternalConfig,
  {
    name: 'Config next plugin',
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
];
