import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { rem } from 'polished';
import { applyStyleModifiers } from "styled-components-modifiers";

import {
  fontColors,
} from "../../modifiers";

const customModifiers = {
  extraSmall: (props) => `
    font-size: ${rem(props.theme.dimensions.baseGrid * 1.5)};
  `,
  small: (props) => `
    font-size: ${rem(props.theme.dimensions.baseGrid * 2)};
  `,
  large: (props) => `
    font-size: ${rem(props.theme.dimensions.baseGrid * 3)};
  `,
};

const modifierConfig = {
  ...fontColors,
  ...customModifiers,
};

function UnstyledIcon(props) {
  return <FontAwesome {...props} />;
};


const Icon = styled(UnstyledIcon)`
  color: ${props => props.theme.colors.text};
  font-size: ${props => rem(props.theme.dimensions.baseGrid * 2.5)};
  ${applyStyleModifiers(modifierConfig)};
`;

/** @component */
export default Icon;
