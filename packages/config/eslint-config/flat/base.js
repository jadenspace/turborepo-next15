import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import turboPlugin from "eslint-plugin-turbo";
import unusedImports from "eslint-plugin-unused-imports";

/**
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  // 1. 린트 대상에서 제외할 파일/디렉토리 설정
  {
    name: "Config ignore patterns",
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      ".turbo/**",
      "storybook-static",
    ],
  },
  // 2. 프로젝트 전체에 적용될 기본 언어 설정
  {
    name: "Config LanguageOption",
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest", // 최신 JavaScript 문법 사용
      parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd(),
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        document: "readonly",
        window: "readonly",
        process: "readonly",
        React: "readonly",
        console: "readonly",
      },
    },
  },
  // 3. ESLint 기본 추천 규칙 적용
  js.configs.recommended,
  // 4. ESLint 기본 규칙 커스터마이징
  {
    name: "Config ESLint",
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "consistent-return": "off", // 일관된 반환 값 강제 비활성화
      "no-useless-catch": "off", // 불필요한 catch 블록 검사 비활성화
      "no-undef": "warn", // 미정의 변수 사용 시 경고로 변경
      "no-nested-ternary": "off", // 중첩 삼항 연산자 허용
      "no-alert": "off", // alert 사용 허용
    },
  },
  // 5. Prettier 코드 스타일 규칙 적용
  {
    name: "Config Prettier",
    files: ["*.{js,jsx,ts,tsx}", "**/*.{js,jsx,ts,tsx}"],
    plugins: {
      prettier: prettier,
    },
    rules: {
      ...prettier.configs.recommended.rules,
      "prettier/prettier": "error", // Prettier 규칙 위반 시 에러 표시
    },
  },
  // 6. 웹 접근성 규칙 설정
  {
    name: "Config jsx-a11y plugin",
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      // label 태그의 htmlFor 속성 필수화
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          labelAttributes: ["htmlFor"],
        },
      ],
      "jsx-a11y/mouse-events-have-key-events": "off", // 마우스 이벤트에 대한 키보드 이벤트 필수화 해제
    },
  },
  // 7. React 관련 규칙 설정
  {
    name: "Config React",
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      // JSX 내 불필요한 중괄호 사용 경고
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ],
      "react/jsx-filename-extension": ["warn", { extensions: [".ts", ".tsx"] }], // 파일 확장자 검사
      "react/jsx-no-useless-fragment": "warn", // 불필요한 Fragment 사용 경고
      "react/button-has-type": "off", // button 태그의 type 속성 필수화 해제
      "react-hooks/rules-of-hooks": "error", // Hook 규칙 위반 시 에러
      "react/jsx-pascal-case": "error", // 컴포넌트 이름 PascalCase 강제
      "react/no-array-index-key": "warn", // 배열 인덱스를 key로 사용 시 경고
      "react/self-closing-comp": "error", // 자식 없는 컴포넌트는 self-closing
      // useEffect의 의존성 배열 검사
      "react-hooks/exhaustive-deps": [
        "warn",
        {
          additionalHooks: "useIsomorphicLayoutEffect",
        },
      ],
    },
  },
  // 8. TypeScript 관련 규칙 설정
  {
    name: "Config Typescript",
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
    },
    rules: {
      // @ts-ignore 사용 시 설명 필수화
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-ignore": "allow-with-description" },
      ],
      "@typescript-eslint/no-explicit-any": "warn", // any 타입 사용 시 경고
      "@typescript-eslint/no-shadow": "warn", // 변수명 섀도잉 경고
      "@typescript-eslint/no-use-before-define": "warn", // 정의되기 전 사용 경고
      "@typescript-eslint/semi": "off", // 세미콜론 규칙 해제
      "@typescript-eslint/no-var-requires": "off", // require 사용 허용
    },
  },
  // 9. import 문 관련 규칙 설정
  {
    name: "Config import plugin",
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          paths: ['src']
        },
      },
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      "sort-imports": ["error", { ignoreDeclarationSort: true }], // import 문 정렬 설정 (import/order와 함께 동작)
      "import/no-named-as-default": "off", // default export된 모듈을 named import로 사용 허용
      "import/no-cycle": "error", // 순환 참조 방지
      "import/no-duplicates": "error", // 중복 import 방지
      "import/no-unused-modules": "warn", // 사용되지 않는 export 경고
      "import/no-relative-parent-imports": "off", // 이 규칙을 비활성화
      // import 문 정렬 규칙
      "import/order": [
        "error",
        {
          warnOnUnassignedImports: true,
          // import 그룹 순서 설정
          groups: [
            "builtin", // Node.js 내장 모듈
            "external", // npm 패키지
            "internal", // 프로젝트 내부 모듈
            "object", // object-imports
            ["parent", "sibling", "index"], // 상대 경로 import
            "type", // 타입 import
            "unknown",
          ],
          // 특정 패턴의 import 위치 지정
          pathGroups: [
            // React 관련 import를 최상단에 위치
            {
              pattern: "react*",
              group: "external",
              position: "before",
            },
            // Next.js 관련 import를 그 다음에 위치
            {
              pattern: "next",
              group: "external",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "before",
            },
            // 스타일 파일을 마지막에 위치
            {
              pattern: "{.,..,@,*}/**/*.+(css|sass|less|scss|pcss|styl|svg)",
              group: "unknown",
              position: "after",
            },
          ],
          // 알파벳 순 정렬
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always", // import 그룹 간 빈 줄 추가
        },
      ],
    },
  },
  // 10. 사용하지 않는 import 처리
  {
    name: "Config unused import plugin",
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "error", // 사용하지 않는 import 제거
      // 사용하지 않는 변수 규칙
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all", // 모든 변수 검사
          varsIgnorePattern: "^_", // _로 시작하는 변수는 무시
          args: "after-used", // 사용된 매개변수 이후의 매개변수만 검사
          argsIgnorePattern: "^_", // _로 시작하는 매개변수는 무시
        },
      ],
    },
  },
  // 11. Turbo 관련 규칙 설정
  {
    name: "Config turbo plugin",
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      // 선언되지 않은 환경 변수 사용 시 경고 (NEXT_PUBLIC_* 제외)
      "turbo/no-undeclared-env-vars": [
        "warn",
        {
          allowList: ["NEXT_PUBLIC_*"],
        },
      ],
    },
  },
];
