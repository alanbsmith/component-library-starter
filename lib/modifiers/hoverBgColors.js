import { lighten } from 'polished';

const hoverBgColors = {
  // graytones
  hoverBgChrome000: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.chrome000)};
    }
  `,
  hoverBgChrome050: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.chrome050)};
    }
  `,
  hoverBgChrome100: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.chrome100)};
    }
  `,
  hoverBgChrome200: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.chrome200)};
    }
  `,
  hoverBgChrome300: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.chrome300)};
    }
  `,
  hoverBgChrome400: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.chrome400)};
    }
  `,
  hoverBgChrome500: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.chrome500)};
    }
  `,
  hoverBgChrome600: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.chrome600)};
    }
  `,
  hoverBgChrome700: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.chrome700)};
    }
  `,
  hoverBgChrome800: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.chrome800)};
    }
  `,
  hoverBgChrome900: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.chrome900)};
    }
  `,

  // colors
  hoverBgAmber: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.amber)};
    }
  `,
  hoverBgBlue: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.blue)};
    }
  `,
  hoverBgblueGrey: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.blueGrey)};
    }
  `,
  hoverBgBrown: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.brown)};
    }
  `,
  hoverBgCyan: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.cyan)};
    }
  `,
  hoverBgDeepOrange: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.deepOrange)};
    }
  `,
  hoverBgDeepPurple: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.deepPurple)};
    }
  `,
  hoverBgGreen: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.green)};
    }
  `,
  hoverBgIndigo: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.indigo)};
    }
  `,
  hoverBglightBlue: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.lightBlue)};
    }
  `,
  hoverBgLightGreen: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.lightGreen)};
    }
  `,
  hoverBgLime: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.lime)};
    }
  `,
  hoverBgOrange: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.orange)};
    }
  `,
  hoverBgPink: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.pink)};
    }
  `,
  hoverBgPurple: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.purple)};
    }
  `,
  hoverBgRed: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.red)};
    }
  `,
  hoverBgTeal: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.teal)};
    }
  `,
  hoverBgYellow: ({ theme }) => `
    &:hover, &:focus {
      background-color: ${lighten(0.05, theme.colors.yellow)};
    }
  `,
};

export default hoverBgColors;
