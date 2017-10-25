import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import fontWeights from '../../modifiers/fontWeights';

const customModifiers = {
  italic: () => 'font-style: italic;',
  extraSmall: () => 'font-size: 12px;',
  small: () => 'font-size: 14px;',
  large: () => 'font-size: 18px;',
};

const modifierConfig = { ...fontWeights, ...customModifiers };

const P = styled.p`
  font-size: 16px;
  margin: 0;
  ${applyStyleModifiers(modifierConfig)}
`;

export default P;
