import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-text":
          "linear-gradient(90deg, #FFF 0.05%, #903FDA 130.38%)",
        "hero-section":
          "url(/assets/mik-rikhero.png)",
        "services-page":"url(/assets/servicePageAssets/serviceBackground.svg)",
        "why-us": "url(../public/assets/landingPageAssets/why-us.png)",
        "welcome-section":
          "url(/assets/landingPageAssets/welcomeSectionBg.png)",
        "blog-section":
          "url(/assets/landingPageAssets/blogBg.png)",
        "digital":
          "url(/assets/landingPageAssets/digital.png)",
        "cta":
          "url(/assets/blogsAssets/cta.png)",
      },
      colors: {
        "purple-primary": "#903FDA",
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        carousel: "carousel 15s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;