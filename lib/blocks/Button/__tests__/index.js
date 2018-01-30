import React from 'react';
import Button from '../index';
import 'jest-styled-components';

import { renderWithTheme } from '__tests__/helpers';

describe('Button Block', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Button>
        <Button.Icon
          modifiers={['left', 'chrome000']}
          name="home"
        />
        <Button.Text>
          action
        </Button.Text>
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies a bgColor modifier', () => {
    const tree = renderWithTheme(
      <Button modifiers={['bgPink']}>
        <Button.Icon
          modifiers={['left', 'chrome000']}
          name="home"
        />
        <Button.Text>
          action
        </Button.Text>
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies a hoverBgColor modifier', () => {
    const tree = renderWithTheme(
      <Button modifiers={['hoverBgGreen']}>
        <Button.Icon
          modifiers={['left', 'chrome000']}
          name="home"
        />
        <Button.Text>
          action
        </Button.Text>
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies the fullWidth modifier', () => {
    const tree = renderWithTheme(
      <Button modifiers={['fullWidth']}>
        <Button.Icon
          modifiers={['left', 'chrome000']}
          name="home"
        />
        <Button.Text>
          action
        </Button.Text>
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
