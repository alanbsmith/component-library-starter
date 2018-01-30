import { rem } from 'polished';

const fontSizes = {
  extraSmall: ({ theme }) => `font-size: ${rem(theme.fontSizes.extraSmall)};`,
  small: ({ theme }) => `font-size: ${rem(theme.fontSizes.small)};`,
  large: ({ theme }) => `font-size: ${rem(theme.fontSizes.large)};`
};

export default fontSizes;
