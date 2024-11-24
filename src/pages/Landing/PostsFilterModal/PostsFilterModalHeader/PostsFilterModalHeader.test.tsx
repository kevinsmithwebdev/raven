import {fireEvent, render, screen, within} from '@testing-library/react-native';
import React from 'react';
import PostsFilterModalHeader from './PostsFilterModalHeader';

const handleClose = jest.fn();

describe('PostsFilterModalHeader', () => {
  beforeEach(() => {
    render(<PostsFilterModalHeader handleClose={handleClose} />);
  });

  describe('rendering', () => {
    it('should have header text', () => {
      expect(screen.getByText('Filter by User')).toBeTruthy();
    });

    it('should have close button', () => {
      expect(screen.getByRole('button', {name: 'close'})).toBeTruthy();
    });

    it('should have icon inside button', () => {
      expect(
        within(screen.getByRole('button', {name: 'close'})).getByTestId(
          'close-icon',
        ),
      ).toBeTruthy();
    });
  });

  describe('pressing close button', () => {
    beforeEach(() => {
      fireEvent.press(screen.getByRole('button', {name: 'close'}));
    });

    it('should call handleClose', () => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });
});
