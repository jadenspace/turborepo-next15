import js from "@eslint/js";
import unusedImports from "eslint-plugin-unused-imports";
import turboPlugin from "eslint-plugin-turbo";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import importPlugin from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

/**
 * @type {import("eslint").Linter.Config}
 */
export const config = [
  {
    name: "Config ESLint",
    ...js.configs.recommended,
    rules: {
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
    },
  },
  {
    name: "Config Prettier",
    ...eslintPluginPrettierRecommended,
  },
  {
    name: "Config LanguageOption",
    languageOptions: {
      ecmaVersion: "latest",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    name: "Config jsx-a11y plugin",
    plugins: {
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      ...pluginJsxA11y.configs.recommended.rules,
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          labelAttributes: ["htmlFor"],
        },
      ],
      "jsx-a11y/mouse-events-have-key-events": "off",
    },
  },
  {
    name: "Config Extended Rules",
    rules: {
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ],
      "react/jsx-filename-extension": ["warn", { extensions: [".ts", ".tsx"] }],
      "react/jsx-no-useless-fragment": "warn",
      "react/button-has-type": "off",
      "react-hooks/rules-of-hooks": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-ignore": "allow-with-description" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-shadow": "warn",
      "@typescript-eslint/no-use-before-define": "warn",
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/no-var-requires": "off",
      "consistent-return": "off",
      "linebreak-style": "off",
      "no-useless-catch": "off",
      "no-undef": "warn",
      "no-nested-ternary": "off",
      "no-alert": "off",
      "no-shadow": "off",
    },
  },
  {
    name: "Config import plugin",
    ...importPlugin.flatConfigs.recommended,
    rules: {
      "import/no-named-as-default": "off",
      "import/order": [
        "error",
        {
          warnOnUnassignedImports: true,
          groups: [
            "builtin",
            "external",
            "internal",
            "object",
            ["parent", "sibling", "index"],
            "type",
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "react*",
              group: "external",
              position: "before",
            },
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
            {
              pattern: "{.,..,@,*}/**/*.+(css|sass|less|scss|pcss|styl|svg)",
              group: "unknown",
              position: "after",
            },
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
        },
      ],
    },
  },
  {
    name: "Config unused import plugin",
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    name: "Config turbo plugin",
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": [
        "warn",
        {
          allowList: ["NEXT_PUBLIC_*"],
        },
      ],
    },
  },
  {
    name: "Config ignore patterns",
    ignores: ["node_modules/**", "dist/**", "build/**", "storybook-static"],
  },
  {
    name: "Config airbnb",
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "import/prefer-default-export": "off",
      "react/require-default-props": "off",
    },
  },
  {
    name: "Config airbnb typescript",
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
];
