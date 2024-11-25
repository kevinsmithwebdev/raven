import {render, screen} from '@testing-library/react-native';
import React, {CSSProperties} from 'react';
import Avatar from './Avatar';

const name = 'Rosalind Franklin';
const backgroundColor = '#332211';

describe('Avatar', () => {
  describe('rendering', () => {
    beforeEach(() => {
      render(<Avatar name={name} backgroundColor={backgroundColor} />);
    });

    it('should show initials', () => {
      expect(screen.getByText('RF')).toBeTruthy();
    });

    it('should have correct color', () => {
      const lastStyleWithProp = screen
        .getByTestId('avatar')
        .props.style.findLast((s: CSSProperties) =>
          s.hasOwnProperty('backgroundColor'),
        );
      expect(lastStyleWithProp.backgroundColor).toBe(backgroundColor);
    });
  });
});
