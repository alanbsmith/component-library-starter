import React from 'react';
import P from '../index';
import renderer from 'react-test-renderer';


describe('A Paragraph tag', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <P>A paragraph tag</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the italic modifier', () => {
    const tree = renderer.create(
      <P modifiers={['italic']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the extraSmall modifier', () => {
    const tree = renderer.create(
      <P modifiers={['extraSmall']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the small modifier', () => {
    const tree = renderer.create(
      <P modifiers={['small']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the large modifier', () => {
    const tree = renderer.create(
      <P modifiers={['large']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the fontWeightBold modifier', () => {
    const tree = renderer.create(
      <P modifiers={['fontWeightBold']}>A paragraph</P>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
