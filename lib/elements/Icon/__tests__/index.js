import React from 'react';
import Icon from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';

describe('Icon Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Icon name="home" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the chrome000 modifier', () => {
    const tree = renderWithTheme(
      <Icon
        modifiers={['chrome000']}
        name="home"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the extraSmall modifier', () => {
    const tree = renderWithTheme(
      <Icon
        modifiers={['extraSmall']}
        name="home"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the small modifier', () => {
    const tree = renderWithTheme(
      <Icon
        modifiers={['small']}
        name="home"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the large modifier', () => {
    const tree = renderWithTheme(
      <Icon
        modifiers={['large']}
        name="home"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
