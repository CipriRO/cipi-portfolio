import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a97b4",
        "primary-content": "#c1f2fc",
        "primary-dark": "#076e84",
        "primary-light": "#0dc0e4",

        background: "#F5F5F5",
        foreground: "#FBFBFB",
        border: "#dde1e2",

        copy: "#232829",
        "copy-light": "#5e6b6e",
        "copy-lighter": "#849295",

        success: "#0ab40a",
        warning: "#b4b40a",
        error: "#b40a0a",

        "success-content": "#c1fcc1",
        "warning-content": "#000000",
        "error-content": "#fcc1c1",
      },
    },
  },
  plugins: [],
};
export default config;
