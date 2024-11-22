import React from 'react';
import * as usePostsZustand from '../../state/posts/posts.zustand';
import {render, screen} from '@testing-library/react-native';
import PostsList from './PostsList';
import {mockPosts} from '../../__mocks__/posts.mocks';

jest.mock('@react-navigation/native');

describe('PostsList', () => {
  describe('with data', () => {
    beforeEach(() => {
      jest
        .spyOn(usePostsZustand, 'usePostsZustand')
        .mockReturnValue({posts: mockPosts});

      render(<PostsList />);
    });

    it('should render list component', () => {
      expect(screen.getByTestId('posts-list')).toBeTruthy();
    });

    it('should render initial cards', () => {
      expect(screen.getAllByTestId('post-card')).toHaveLength(10);
    });

    it('should not render loading spinner', () => {
      expect(screen.queryByTestId('loading-indicator')).toBeNull();
    });
  });

  describe('with no data', () => {
    beforeEach(() => {
      jest
        .spyOn(usePostsZustand, 'usePostsZustand')
        .mockReturnValueOnce({posts: null});

      render(<PostsList />);
    });

    it('should render list component', () => {
      expect(screen.getByTestId('posts-list')).toBeTruthy();
    });

    it('should not render initial cards', () => {
      expect(screen.queryAllByTestId('post-card')).toHaveLength(0);
    });

    it('should render loading spinner', () => {
      expect(screen.getByTestId('loading-indicator')).toBeTruthy();
    });
  });
});
