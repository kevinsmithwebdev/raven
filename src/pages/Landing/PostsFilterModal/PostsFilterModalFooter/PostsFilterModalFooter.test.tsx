import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import PostsFilterModalFooter from './PostsFilterModalFooter';

const clearLocalUserId = jest.fn();
const applyUserId = jest.fn();

beforeEach(jest.clearAllMocks);

describe('PostsFilterModalFooter', () => {
  beforeEach(() => {
    render(
      <PostsFilterModalFooter
        clearLocalUserId={clearLocalUserId}
        applyUserId={applyUserId}
      />,
    );
  });

  describe('rendering', () => {
    it('should have two buttons', () => {
      expect(screen.getAllByRole('button')).toHaveLength(2);
    });

    it('should have apply button', () => {
      expect(screen.getByRole('button', {name: 'apply'})).toBeTruthy();
    });

    it('should have clear button', () => {
      expect(screen.getByRole('button', {name: 'clear'})).toBeTruthy();
    });
  });

  describe('pressing', () => {
    describe('clear button', () => {
      beforeEach(() => {
        fireEvent.press(screen.getByRole('button', {name: 'clear'}));
      });

      it('should call clearLocalUserId', () => {
        expect(clearLocalUserId).toHaveBeenCalledTimes(1);
      });

      it('should not call applyUserId', () => {
        expect(applyUserId).not.toHaveBeenCalled();
      });
    });

    describe('apply button', () => {
      beforeEach(() => {
        fireEvent.press(screen.getByRole('button', {name: 'apply'}));
      });

      it('should not call clearLocalUserId', () => {
        expect(clearLocalUserId).not.toHaveBeenCalled();
      });

      it('should call applyUserId', () => {
        expect(applyUserId).toHaveBeenCalledTimes(1);
      });
    });
  });
});
