module.exports = {
    plugins: ["react-hooks", "import"],
    extends: [
      "@rushstack/eslint-config/mixins/react",
      "plugin:@tanstack/eslint-plugin-query/recommended",
    ],
    settings: {
      react: {
        // 현재 React 버전을 명시합니다.
        // 명시하지 않을 경우(기본값 'detect') React 라이브러리 전체를 불러오므로
        // 린트 과정에서 속도가 느려질 수 있습니다.
        version: "detect",
      },
    },
  
    rules: {
    // JSX에서 bind 사용 경고 (arrow function 사용)
    // https://stackoverflow.com/questions/36677733/why-shouldnt-jsx-props-use-arrow-functions-or-bind
    "react/jsx-no-bind": "off",
    
    
    // 타입 정의를 강제하는 규칙
    "react-hooks/rules-of-hooks": "error",
    
    // useEffect의 의존성 배열 관련 경고 제외
    "@tanstack/query/exhaustive-deps": "off",
    
    },
  };