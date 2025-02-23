import pluginNext from "@next/eslint-plugin-next";
import { config as baseConfig } from "./base.js";

/**
 * Next.js 프로젝트를 위한 ESLint 설정
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  // 기본 ESLint 설정 확장
  ...baseConfig,

  // Next.js 관련 ESLint 규칙 설정
  {
    name: "Config next plugin",
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules, // Next.js 권장 규칙 적용
      ...pluginNext.configs["core-web-vitals"].rules, // Core Web Vitals 관련 규칙 적용
    },
  },
];
