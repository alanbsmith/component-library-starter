import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { rem } from 'polished';

import {
  fontColors,
  fontSizes,
  fontStyles,
  fontWeights
} from "../../modifiers";

const modifierConfig = {
  ...fontColors,
  ...fontSizes,
  ...fontStyles,
  ...fontWeights,
};

const Text = styled.span`
  font-size: ${props => rem(props.theme.fontSizes.medium)};
  margin: 0;
  ${applyStyleModifiers(modifierConfig)};
`;

Text.modifiers = modifierConfig;

/** @component */
export default Text;
