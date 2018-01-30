import React from 'react';
import Text from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';

describe('Text Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Text>Some Text</Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the italic modifier', () => {
    const tree = renderWithTheme(
      <Text modifiers={['italic']}>Some Text</Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the extraSmall modifier', () => {
    const tree = renderWithTheme(
      <Text modifiers={['extraSmall']}>Some Text</Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the small modifier', () => {
    const tree = renderWithTheme(
      <Text modifiers={['small']}>Some Text</Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the large modifier', () => {
    const tree = renderWithTheme(
      <Text modifiers={['large']}>Some Text</Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the fontWeightBold modifier', () => {
    const tree = renderWithTheme(
      <Text modifiers={['fontWeightBold']}>Some Text</Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
