import styled from 'styled-components';
import gridScale from '../../utils/gridScale';

import { Text as BaseText } from '../../elements';

const Text = styled(BaseText)`
  font-weight: ${props => props.theme.fontWeights.light};
  text-transform: uppercase;
`;

export default Text;
