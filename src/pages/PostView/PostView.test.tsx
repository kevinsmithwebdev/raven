import {render, screen} from '@testing-library/react-native';
import React from 'react';
import PostView from './PostView';
import * as useGetPostViewData from './hooks/useGetPostViewData';
import {mockPosts} from '../../__mocks__/posts.mocks';
import {mockUsers} from '../../__mocks__/users.mocks';
import {mockComments} from '../../__mocks__/comments.mocks';

describe('PostView', () => {
  describe('rendering', () => {
    describe('with posts', () => {
      beforeEach(() => {
        jest.spyOn(useGetPostViewData, 'useGetPostViewData').mockReturnValue({
          post: mockPosts[2],
          user: mockUsers[2],
          comments: mockComments,
        });

        render(<PostView />);
      });

      it('should render PostView', () => {
        expect(screen.getByTestId('post-view')).toBeTruthy();
      });

      it('should render PostViewPost', () => {
        expect(screen.getByTestId('post-view-post')).toBeTruthy();
      });

      it('should render PostViewUser', () => {
        expect(screen.getByTestId('post-view-user')).toBeTruthy();
      });

      it('should render PostViewComments', () => {
        expect(screen.getByTestId('post-view-comments')).toBeTruthy();
      });
    });

    describe('with not posts', () => {
      beforeEach(() => {
        jest.spyOn(useGetPostViewData, 'useGetPostViewData').mockReturnValue({
          post: null,
          user: null,
          comments: null,
        });

        render(<PostView />);
      });

      it('should not render PostView', () => {
        expect(screen.queryByTestId('post-view')).toBeNull();
      });

      it('should not render PostViewPost', () => {
        expect(screen.queryByTestId('post-view-post')).toBeNull();
      });

      it('should not render PostViewUser', () => {
        expect(screen.queryByTestId('post-view-user')).toBeNull();
      });

      it('should not render PostViewComments', () => {
        expect(screen.queryByTestId('post-view-comments')).toBeNull();
      });
    });
  });
});
