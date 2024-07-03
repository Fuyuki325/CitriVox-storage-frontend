import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'times': ["Times New Roman"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      /*
      Primary Color: #4A90E2 (Blue)
      Secondary Color: #50E3C2 (Turquoise)
      Accent Color: #F5A623 (Orange)
      Background Color: #F0F4F8 (Light Gray)
      Text Color: #333333 (Dark Gray)
      */
     colors: {
      primary: '#4A90E2',
      secondary: '#50E3C2',
      accent: '#F5A623',
      background: '#F0F4F8',
      text: '#333333'
     }
    },
  },
  plugins: [],
};
export default config;
