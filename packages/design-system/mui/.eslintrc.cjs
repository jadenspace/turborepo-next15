require("@jaden/eslint-config/patch");

module.exports = {
	root: true,
	env: {
	  "browser": true,
	  "node": true,
	  "es2021": true
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
	  sourceType: "module",
	  tsconfigRootDir: __dirname,
	  project: "./tsconfig.json"
	},
	extends: [
		"@jaden/eslint-config",
		"@jaden/eslint-config/react",
		"plugin:storybook/recommended"
	],
	settings: {
		react: {
			version: "19",
		},
	},
};