import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

//Ver todas las alternativas de colores que hay en /node_modules/tailwindcss/colors.js --> /node_modules/tailwindcss/lib/public/colors.js
//Cambiando la variable colors.pageColorsXXX por la que se desee cambian todos los colores de la página
const colorsConfig = colors.pageColorsBordeauxGray; 

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        //colores: colorsConfig, 
        //Nueva configuración de colores 27/11/2024
        colores: {
        fondoNavBar: "#a51c30",
        fuenteLogoNavBar: "#d1d5db",
        fuenteNavBar: "#ffffff", 
        fuenteNavBarHover: "#e4bbc1", 
        fondoNavBarFocus: "#94998e",
        boton: "#888d81",
        botonHover: "#94998e",
        boton2: "#a51c30",
        boton2Hover: "#4c0519",
        tituloGrande: "#881337",
        titulo: "#5A595A",
        tituloPrincipal: "#111827",
        fondoComun: "#FFFFFF",
        fondoFooter: "#888d81",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
