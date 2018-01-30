const path = require("path");
const theme = require("./config/theme");

module.exports = {
  sections: [
    {
      name: "Blocks",
      ignore: ["**/__tests__/**", "**/blocks/index.js"],
      components: "lib/blocks/**/index.js",
      description:
        "Blocks are the highest level of abstraction in the Blocks, Elements, Modifiers concept. They are responsible for providing the context for Elements, handling UI logic, and rendering the Elements within the Block. They are not connected to application state, nor do they handle any business logic."
    },
    {
      name: "Elements",
      ignore: ["**/__tests__/**", "**/elements/index.js"],
      components: "lib/elements/**/index.js",
      description:
        "Elements are the smallest, indivisible parts of UI. They are responsible for actually rendering the UI. They do not handle application logic or UI logic, but they do handle their own modifiers which modify the element’s style. Elements generally exist within the context of a Block (as their own file in the Block’s directory) allowing the reuse of that set of Elements, but they are not exclusively bound to blocks. An example of a stand-alone Element would be an A, Link, H3, or P. These common elements live in `lib/elements`."
    }
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, "styleguide/ThemeWrapper")
  },
  styleguideDir: "docs",
  template: "templates/index.html",
  theme: {
    color: {
      base: theme.colors.text,
      light: theme.colors.textLight,
      lightest: theme.colors.chrome200,
      link: theme.colors.link,
      linkHover: theme.colors.linkHover,
      border: theme.colors.chrome200,
      name: theme.colors.green,
      type: theme.colors.purple,
      error: theme.colors.red,
      baseBackground: theme.colors.chrome000,
      codeBackground: 'pink',
      sidebarBackground: theme.colors.chrome100
    },
    fontFamily: {
      base: theme.fonts.primary
    },
    fontSize: {
      base: 12,
      text: 16,
      small: 14,
      h1: 40,
      h2: 36,
      h3: 32,
      h4: 28,
      h5: 24,
      h6: 20
    }
  }
};
