import { rem } from 'polished';

function gridScale(props, scale) {
  const { baseGrid } = props.theme.dimensions;
  return rem(baseGrid * scale);
}

export default gridScale;
