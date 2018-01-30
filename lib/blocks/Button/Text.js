import styled from 'styled-components';

import { Text as BaseText } from '../../elements';

const Text = styled(BaseText)`
  font-weight: ${props => props.theme.fontWeights.light};
  text-transform: uppercase;
`;

export default Text;
