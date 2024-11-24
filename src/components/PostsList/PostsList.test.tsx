import React from 'react';
import {render, screen} from '@testing-library/react-native';
import PostsList from './PostsList';
import {mockPosts} from '../../__mocks__/posts.mocks';

jest.mock('@react-navigation/native');

describe('PostsList', () => {
  describe('with data', () => {
    beforeEach(() => {
      render(<PostsList filteredPosts={mockPosts} />);
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

  describe('with empty data', () => {
    beforeEach(() => {
      render(<PostsList filteredPosts={[]} />);
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

  describe('with nullish data', () => {
    beforeEach(() => {
      render(<PostsList filteredPosts={null} />);
    });

    it('should null', () => {
      expect(screen.toJSON()).toBeNull();
    });
  });
});
