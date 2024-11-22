import {render, screen} from '@testing-library/react-native';
import React from 'react';
import PostView from './PostView';
import * as useGetPostId from './hooks/useGetPostId';

describe('PostView', () => {
  describe('rendering', () => {
    describe('with a post id', () => {
      beforeEach(() => {
        jest.spyOn(useGetPostId, 'useGetPostId').mockReturnValue(12);

        render(<PostView />);
      });

      it('should render PostView', () => {
        expect(screen.getByTestId('post-view')).toBeTruthy();
      });
    });

    describe('without a post id', () => {
      beforeEach(() => {
        jest.spyOn(useGetPostId, 'useGetPostId').mockReturnValue(null);

        render(<PostView />);
      });

      it('should not render PostView', () => {
        expect(screen.toJSON()).toBeNull();
      });
    });
  });
});
