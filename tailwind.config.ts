import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        ChurchBG: "url('/images/Resized_Lighthouse_Baptist_Church.jpg')"
      },
      // PastorPortrait: {
      //   PastorPT: "url('images/Pastor_Portrait.jpg')"
      // }
    },
  },
  plugins: [],
} satisfies Config;
