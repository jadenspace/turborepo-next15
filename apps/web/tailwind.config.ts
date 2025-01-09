/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@jaden/tailwindcss-config")],
  // 기본 설정 확장
  // 필요한 경우 프로젝트별 설정 추가
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // 추가 경로
  ],
  theme: {
    extend: {
      // 추가 테마
    },
  },
};
