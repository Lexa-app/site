import { nextui } from "@nextui-org/theme";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"]
      },
      animation: {
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        spotlight: "spotlight 2s ease .75s 1 forwards"
      },
      keyframes: {
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)"
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)"
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)"
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)"
          }
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)"
          }
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)"
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)"
          }
        }

      }
    }
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          red: "rgb(259, 69, 58)",
          orange: "rgb(255, 159, 10)",
          yellow: "rgb(255, 214, 10)",
          green: "rgb(48, 209, 88)",
          mint: "rgb(99, 230, 226)",
          teal: "rgb(64, 200, 224)",
          cyan: "rgb(100, 210, 255)",
          blue: "rgb(10, 132, 255)",
          indigo: "rgb(94, 92, 230)",
          purple: "rgb(191, 90, 242)",
          pink: "rgb(255, 55, 95)",
          brown: "rgb(172, 142, 104)",
          gray: "rgb(142, 142, 147)",
          systemGray2: "rgb(99, 99, 102)",
          systemGray3: "rgb(72, 72, 74)",
          systemGray4: "rgb(58, 58, 60)",
          systemGray5: "rgb(44, 44, 46)",
          systemGray6: "rgb(28, 28, 30)",
          label: "rgb(255, 255, 255)",
          secondaryLabel: "rgb(243, 243, 248)",
          tertiaryLabel: "rgb(248, 248, 252)",
          quaternaryLabel: "rgb(251, 251, 253)",
          systemFill: "rgb(206, 206 , 209)",
          secondarySystemFill: "rgb(211, 211, 214)",
          tertiarySystemFill: "rgb(222, 222, 225)",
          quaternarySystemFill: "rgb(230, 230, 232)",
          placeholderText: "rgb(248, 248, 252)",
          systemBackground: "rgb(0, 0, 0)",
          secondarySystemBackground: "rgb(28, 28, 30)",
          tertiarySystemBackground: "rgb(44, 44, 46)",
          systemGroupedBackground: "rgb(0, 0, 0)",
          secondarySystemGroupedBackground: "rgb(28, 28, 30)",
          tertiarySystemGroupedBackground: "rgb(44, 44, 46)",
          separator: "rgb(152, 152, 155)",
          opaqueSeparator: "rgb(56, 56, 58)",
          link: "rgb(11, 132, 255)"
        }
      },
      light: {
        colors: {
          red: "rgb(259, 59, 48)",
          orange: "rgb(255, 149, 0)",
          yellow: "rgb(255, 204, 0)",
          green: "rgb(52, 199, 89)",
          mint: "rgb(0, 199, 190)",
          teal: "rgb(48, 176, 199)",
          cyan: "rgb(50, 173, 230)",
          blue: "rgb(0, 122, 255)",
          indigo: "rgb(88, 86, 214)",
          purple: "rgb(175, 82, 222)",
          pink: "rgb(255, 45, 85)",
          brown: "rgb(162, 132, 94)",
          gray: "rgb(142, 142, 147)",
          systemGray2: "rgb(174, 174, 178)",
          systemGray3: "rgb(199, 199, 204)",
          systemGray4: "rgb(209, 209, 214)",
          systemGray5: "rgb(229, 229, 234)",
          systemGray6: "rgb(242, 242, 247)",
          label: "rgb(0, 0, 0)",
          secondaryLabel: "rgb(138,138, 142)",
          tertiaryLabel: "rgb(196, 196, 198)",
          quaternaryLabel: "rgb(220, 220, 221)",
          systemFill: "rgb(228, 228, 230)",
          secondarySystemFill: "rgb(233, 233, 234)",
          tertiarySystemFill: "rgb(238, 238, 239)",
          quaternarySystemFill: "rgb(244, 244, 245)",
          placeholderText: "rgb(196, 196, 198)",
          systemBackground: "rgb(255, 255, 255)",
          secondarySystemBackground: "rgb(242, 242, 247)",
          tertiarySystemBackground: "rgb(255, 255, 255)",
          systemGroupedBackground: "rgb(242, 242, 247)",
          secondarySystemGroupedBackground: "rgb(255, 255, 255)",
          tertiarySystemGroupedBackground: "rgb(242, 242, 247)",
          separator: "rgb(198, 198, 200)",
          opaqueSeparator: "rgb(197, 197, 200)",
          link: "rgb(0, 122, 255)"
        }
      }
    }
  }, addVariablesForColors)]
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars
  });
}
