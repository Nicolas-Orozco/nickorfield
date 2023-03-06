/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      {
        autumn: {
          ...require("daisyui/src/colors/themes")["[data-theme=autumn]"],
          warning: "#ae5f0f",
        },
      },
      "halloween",
    ],
  },
  plugins: [require("daisyui")],
};
