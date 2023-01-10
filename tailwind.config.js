module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        bdtoolstheme: {
          primary: "#f43737",
          secondary: "#FED000",
          accent: "#808080",
          neutral: "#D3D3D3",

          "base-100": "#ffffff",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}
