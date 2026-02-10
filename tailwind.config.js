/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // button colors
        button: {
          DEFAULT: "#55198b",
          hover: "#8c43ce"
        },
        topButtonHover: "#000",

        // text colors
        title: "#000000",
        textColor: "#000000",
        subTitle: "#868e96",
        cardSubtitle: "#666666",
        textDark: "#ffffff",

        // toggle switch
        toggleCheck: "#2196f3",
        toggleSliderBg: "#ccc",

        // backgrounds
        lightBg1: "#fff",
        lightBg2: "rgb(255, 255, 255)",
        lightBg3: "#f5f2f4",
        darkBg: "#171c28",

        // borders
        progressBarBg: "rgb(243, 239, 239)",
        lightBorder1: "rgba(211, 211, 211, 0.397)",
        educationCardBorder: "#a9a7f9",

        // hovers
        headerHoverBg: "#f4f4f4",
        contactDetailHover: "#b5b5b5",

        // misc
        progressBarSpan: "#aaa5ff",
        iconBg: "#333",
        appHeaderBg: "#282c34",
        skills: "#645beb",
        appLink: "#09d3ac",

        // social media
        social: {
          facebook: "#3b5998",
          linkedin: "#0e76a8",
          github: "#333",
          gitlab: "#fca326",
          google: "#ea4335",
          twitter: "#1da1f2",
          medium: "#000",
          stackoverflow: "#f48024",
          instagram: "#c13584",
          kaggle: "#20beff"
        }
      },
      boxShadow: {
        light: "0 1px 3px rgba(0, 0, 0, 0.1)",
        "light-dark": "0 1px 3px rgba(0, 0, 0, 0.2)",
        "light-darker": "0 1px 3px rgba(0, 0, 0, 0.3)",
        dark: "0 1px 3px #d9dbdf",
        "dark-2": "0 1px 3px #ffffff",
        "experience-card": "0px 20px 50px #d9dbdf",
        "experience-card-dark": "0px 0px 20px 0px rgba(0,0,0,0.5)"
      },
      fontFamily: {
        agustina: ["Agustina Regular", "cursive"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        "experience-blur": "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2))",
        "experience-banner": "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5))"
      },
      keyframes: {
        wave: {
          "0%": {transform: "rotate(0deg)"},
          "10%": {transform: "rotate(-10deg)"},
          "20%": {transform: "rotate(12deg)"},
          "30%": {transform: "rotate(-10deg)"},
          "40%": {transform: "rotate(9deg)"},
          "50%, 100%": {transform: "rotate(0deg)"}
        },
        "sk-circleBounceDelay": {
          "0%, 80%, 100%": {transform: "scale(0)"},
          "40%": {transform: "scale(1)"}
        }
      },
      animation: {
        wave: "wave 1.8s infinite",
        "sk-bounce": "sk-circleBounceDelay 1.2s infinite ease-in-out both"
      }
    }
  },
  plugins: []
};
