import lineClamp from "@tailwindcss/line-clamp";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // 여기에 테마 확장 설정 추가
    },
    plugins: [lineClamp],
  },
};
