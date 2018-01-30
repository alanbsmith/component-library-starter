import React from 'react';
import P from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';

describe('P Element', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <P>A paragraph tag</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the italic modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['italic']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the extraSmall modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['extraSmall']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the small modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['small']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the large modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['large']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the fontWeightBold modifier', () => {
    const tree = renderWithTheme(
      <P modifiers={['fontWeightBold']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
