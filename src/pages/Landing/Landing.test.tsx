import {render, screen} from '@testing-library/react-native';
import Landing from './Landing';
import React from 'react';
import {useLoadAllPosts} from '../../services/posts/useLoadAllPosts';
import {useLoadUsers} from '../../services/users/useLoadUsers';
import * as usePostsFilter from './hooks/usePostsFilter';
import {mockPosts} from '../../__mocks__/posts.mocks';

jest.mock('../../services/posts/useLoadAllPosts');
jest.mock('../../services/users/useLoadUsers');
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({setParams: jest.fn()}),
}));

beforeEach(jest.clearAllMocks);

describe('Landing', () => {
  describe('rendering', () => {
    beforeEach(() => {
      jest.spyOn(usePostsFilter, 'usePostsFilter').mockReturnValue({
        filteredPosts: mockPosts,
      } as usePostsFilter.UsePostFilterState);
      render(<Landing />);
    });

    it('should render landing page', () => {
      expect(screen.getByTestId('landing-page')).toBeTruthy();
    });

    it('should render posts list', () => {
      expect(screen.getByTestId('posts-list')).toBeTruthy();
    });

    it('should call useLoadAllPosts', () => {
      expect(useLoadAllPosts).toHaveBeenCalledTimes(1);
    });

    it('should call useLoadUsers', () => {
      expect(useLoadUsers).toHaveBeenCalledTimes(1);
    });
  });
});
