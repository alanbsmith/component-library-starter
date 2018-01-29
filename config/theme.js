// import { darken, rgba } from 'polished';
const { darken, rgba } = require("polished");

// common colors
const chrome000 = "#FFFFFF";
const chrome500 = "#9E9E9E";
const chrome600 = "#757575";
const chrome800 = "#424242";
const chrome900 = "#212121";
const blue = "#2196F3";
const deepPurple = "#673AB7";

module.exports = {
  colors: {
    // ui colors
    background: chrome000,
    link: blue,
    linkHover: darken(0.2, blue),
    linkVisited: darken(0.2, deepPurple),
    text: chrome800,
    textLight: chrome500,
    overlay: rgba(chrome900, 0.85),
    shadow: rgba(chrome600, 0.4),
    shadowLight: rgba(chrome600, 0.2),

    // material ui color palette
    red: "#F44336",
    pink: "#E91E63",
    purple: "#9C27B0",
    deepPurple: "#673AB7",
    indigo: "#3F51B5",
    blue,
    lightBlue: "#03A9F4",
    cyan: "#00BCD4",
    teal: "#009688",
    green: "#4CAF50",
    lightGreen: "#8BC34A",
    lime: "#CDDC39",
    yellow: "#FFEB3B",
    amber: "#FFC107",
    orange: "#FF9800",
    deepOrange: "#FF5722",
    brown: "#795548",
    blueGrey: "#607D8B",

    // material ui grayscale
    chrome000,
    chrome100: "#F5F5F5",
    chrome200: "#EEEEEE",
    chrome300: "#E0E0E0",
    chrome400: "#BDBDBD",
    chrome500,
    chrome600,
    chrome700: "#616161",
    chrome800,
    chrome900
  },
  dimensions: {
    baseGrid: 8,
    borderRadius: '2px',
  },
  fonts: {
    primary: "Open Sans",
    primaryFallback: "Helvetica, Arial, sans-serif"
  },
  fontWeights: {
    light: 300,
    normal: 400,
    semiBold: 600,
    bold: 700,
  },
  fontSizes: {
    extraSmall: 12,
    small: 14,
    medium: 16,
    large: 18,
    h1: 40,
    h2: 36,
    h3: 32,
    h4: 28,
    h5: 24,
    h6: 20
  }
};
