module.exports = {
  extends: [
    // ✅ (필수) rushstack 컨피그를 가져옵니다.
    "@rushstack/eslint-config/profile/web-app",
  ],
  rules: {
    // 필요한 커스텀 규칙을 여기에 정의합니다.
    "@typescript-eslint/explicit-function-return-type": "off",

    // 불필요한 null 체크 경고
    "@rushstack/no-new-null": "off",

    // 불필요한 타입 정의 경고
    "@typescript-eslint/no-explicit-any": "off",
    // 정의되지 않은 변수 사용 시 경고
    "no-undef": "off",
    // 선언됐지만 사용되지 않은 변수가 있을 때 경고
    "no-unused-vars": "off",
    // Promise를 반환하는 함수의 결과를 처리하지 않을 때 경고 (await나 .then() 없이 사용)
    "@typescript-eslint/no-floating-promises": "off",
    // 변수나 함수가 정의되기 전에 사용될 때 경고
    "@typescript-eslint/no-use-before-define": "off",
    // 사용되지 않는 변수가 있을 때 경고
    "@typescript-eslint/no-unused-vars": "off",
    // 타입 정의를 강제하는 규칙
    "@typescript-eslint/typedef": "off",

    // 불필요한 문자열 연결 경고
    "no-useless-concat": "off",

    // 불필요한 return 경고
    "no-unused-expressions": "off",

    // 네이밍 컨벤션
    "@typescript-eslint/naming-convention": [
      "warn",
      // camelCase 변수, PascalCase 변수, UPPER_CASE 변수 허용
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      // camelCase 함수, PascalCase 함수 허용
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      // PascalCase 클래스, interfaces, type aliases, enums 허용
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      // interface 앞에 I 사용 불가
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
      // typeAlias 앞에 T 사용 불가
      {
        selector: "typeAlias",
        format: ["PascalCase"],
        custom: {
          regex: "^T[A-Z]",
          match: false,
        },
      },
      // typeParameter 앞에 T 사용 불가
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        custom: {
          regex: "^T[A-Z]",
          match: false,
        },
      },
    ],

    // 구조분해할당
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],

    // import 순서
    /* "import/order": [
      "off",
      {
        // import 그룹 순서 정의
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        
        // next 관련 import는 external 그룹 뒤에 위치
        "pathGroups": [
          {
            "pattern": "next(/!**)?",
            "group": "external",
            "position": "after"
          }
        ],
        
        // builtin 모듈은 pathGroups에서 제외
        "pathGroupsExcludedImportTypes": ["builtin"],
        
        // 그룹 간 빈 줄 추가
        "newlines-between": "always",
        
        // 알파벳 순 정렬
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ], */
  },
};
