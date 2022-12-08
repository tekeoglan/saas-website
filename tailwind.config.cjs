/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        line: ["1.5rem", { lineHeight: "1.875rem", letterSpacing: "-0.02em" }],
        line2: [
          "1.313rem",
          { lineHeight: "1.75rem", letterSpacing: "-0.02em" },
        ],
        line3: [
          "1.25rem",
          { lineHeight: "1.688rem", letterSpacing: "-0.02em" },
        ],
        line4: [
          "1.125rem",
          { lineHeight: "1.375rem", letterSpacing: "-0.02em" },
        ],
        h1: [
          "4.375rem",
          {
            fontWeight: "600",
            lineHeight: "5.25rem",
            letterSpacing: "-0.02em",
          },
        ],
        h2: [
          "2.25rem",
          { fontWeight: "600", lineHeight: "3rem", letterSpacing: "-0.02em" },
        ],
        h3: [
          "1.563rem",
          {
            fontWeight: "600",
            lineHeight: "1.875rem",
            letterSpacing: "-0.02em",
          },
        ],
        h4: [
          "1.313rem",
          {
            fontWeight: "400",
            lineHeight: "1.75rem",
            letterSpacing: "-0.02em",
          },
        ],
        h5: [
          "0.938rem",
          {
            fontWeight: "700",
            lineHeight: "1.125rem",
            letterSpacing: "-0.02em",
          },
        ],
        fp: [
          "1.125rem",
          { fontWeight: "400", lineHeight: "1.5rem", letterSpacing: "-0.02em" },
        ],
        p: [
          "1rem",
          { fontWeight: "400", lineHeight: "1.5rem", letterSpacing: "-0.02em" },
        ],
        logo: [
          "1.813rem",
          {
            fontWeight: "700",
            lineHeight: "2.188rem",
            letterSpacing: "-0.02em",
          },
        ],
      },
      colors: {
        blue: {
          darker: "#0032E3",
          mid: "#7C93E5",
          lighter: "#3159e8",
          light: "#bccbfe",
        },
        grey: {
          dark: "#1f1e1e",
          mid: "#6D6D6D",
          light: "#c4c4c4",
        },
        white: {
          0: "#ffffff",
          mid: "#d8d8d8",
          light: "#e8eef8",
          lighter: "#e0dada",
        },
        green: {
          mid: "#5fa52b",
        },
        red: {
          mid: "#e5442e",
        },
      },
      screens: {
        mob: "23.438em",
        tab: "48em",
        pc: "90em",
      },
    },
  },
  plugins: [],
};
