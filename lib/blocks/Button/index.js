import styled from "styled-components";
import { lighten, rem } from "polished";
import { applyStyleModifiers } from "styled-components-modifiers";

import Icon from "./Icon";
import Text from "./Text";

import { bgColors, hoverBgColors } from "../../modifiers";

import gridScale from "../../utils/gridScale";

const customModifiers = {
  fullWidth: () => `flex: 1`
};

const modifierConfig = {
  ...bgColors,
  ...hoverBgColors,
  ...customModifiers
};

const Button = styled.button`
  align-items: flex-end;
  background-color: ${props => props.theme.colors.chrome500};
  border-radius: ${props => props.theme.dimensions.borderRadius};
  border: solid 1px transparent;
  color: ${props => props.theme.colors.chrome000};
  cursor: pointer;
  display: flex;
  font-size: ${props => rem(props.theme.dimensionsFontSize)};
  justify-content: center;
  padding: ${props => `${gridScale(props, 1)} ${gridScale(props, 3)}`};
  outline: none;
  transition: all 200ms ease;

  &:hover,
  &:focus {
    background-color: ${props => lighten(0.05, props.theme.colors.chrome500)};
    box-shadow: 0 8px 8px 0 ${props => props.theme.colors.shadow};
  }

  ${applyStyleModifiers(modifierConfig)};
`;

Button.Icon = Icon;
Button.Text = Text;

/** @component */
export default Button;
