import styled from 'styled-components';
import { rem } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { Icon as BasicIcon } from '../../elements';

const modifierConfig = {
  left: (props) => `
    padding-right: ${rem(props.theme.dimensions.baseGrid)};
  `,
  right: (props) => `
    padding-left: ${rem(props.theme.dimensions.baseGrid)};
  `,
};

const Icon = styled(BasicIcon)`
  font-size: 24px;
  ${applyStyleModifiers(modifierConfig)}
`;

export default Icon;
