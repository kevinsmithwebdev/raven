import {mockComments} from '../../../__mocks__/comments.mocks';
import {mockPosts} from '../../../__mocks__/posts.mocks';
import {mockUsers} from '../../../__mocks__/users.mocks';
import * as useGetPostId from './useGetPostId';
import * as useLoadComments from '../../../services/comments/useLoadComments';
import * as usePostsZustand from '../../../state/posts/posts.zustand';
import * as useUsersZustand from '../../../state/users/users.zustand';
import {renderHook, RenderHookResult} from '@testing-library/react-native';
import {
  useGetPostViewData,
  UserGetPostViewDataState,
} from './useGetPostViewData';
import cloneDeep from 'lodash.clonedeep';

let useGetPostIdSpy: jest.SpyInstance;
let usePostsZustandSpy: jest.SpyInstance;
let useUsersZustandSpy: jest.SpyInstance;
let useCommentsZustandSpy: jest.SpyInstance;

let renderedHook: RenderHookResult<UserGetPostViewDataState, undefined>;

const mockPostId = 42;

beforeEach(jest.clearAllMocks);

describe('useGetPostViewData', () => {
  describe('with full data', () => {
    beforeEach(() => {
      useGetPostIdSpy = jest
        .spyOn(useGetPostId, 'useGetPostId')
        .mockImplementation(() => mockPostId);
      usePostsZustandSpy = jest
        .spyOn(usePostsZustand, 'usePostsZustand')
        .mockImplementation(() => ({posts: mockPosts}));
      useUsersZustandSpy = jest
        .spyOn(useUsersZustand, 'useUsersZustand')
        .mockImplementation(() => ({users: mockUsers}));
      useCommentsZustandSpy = jest
        .spyOn(useLoadComments, 'useLoadComments')
        .mockImplementation(() => ({comments: mockComments}));

      renderedHook = renderHook(useGetPostViewData);
    });

    it('should call useGetPostId', () => {
      expect(useGetPostIdSpy).toHaveBeenCalledTimes(1);
    });

    it('should call usePostsZustand', () => {
      expect(usePostsZustandSpy).toHaveBeenCalledTimes(1);
    });

    it('should call useUsersZustand', () => {
      expect(useUsersZustandSpy).toHaveBeenCalledTimes(1);
    });

    it('should call useCommentsZustand with correct params', () => {
      expect(useCommentsZustandSpy).toHaveBeenCalledTimes(1);
      expect(useCommentsZustandSpy).toHaveBeenCalledWith({postId: mockPostId});
    });

    it('should return correct state', () => {
      const expectedState = {
        post: mockPosts[mockPostId],
        user: mockUsers[5],
        comments: mockComments,
      };

      expect(renderedHook.result.current).toStrictEqual(expectedState);
    });
  });

  describe('with nullish posts and users data', () => {
    beforeEach(() => {
      useGetPostIdSpy = jest
        .spyOn(useGetPostId, 'useGetPostId')
        .mockImplementation(() => mockPostId);
      usePostsZustandSpy = jest
        .spyOn(usePostsZustand, 'usePostsZustand')
        .mockImplementation(() => ({posts: null}));
      useUsersZustandSpy = jest
        .spyOn(useUsersZustand, 'useUsersZustand')
        .mockImplementation(() => ({users: null}));
      useCommentsZustandSpy = jest
        .spyOn(useLoadComments, 'useLoadComments')
        .mockImplementation(() => ({comments: mockComments}));

      renderedHook = renderHook(useGetPostViewData);
    });

    it('should call useGetPostId', () => {
      expect(useGetPostIdSpy).toHaveBeenCalledTimes(1);
    });

    it('should call usePostsZustand', () => {
      expect(usePostsZustandSpy).toHaveBeenCalledTimes(1);
    });

    it('should call useUsersZustand', () => {
      expect(useUsersZustandSpy).toHaveBeenCalledTimes(1);
    });

    it('should call useCommentsZustand with correct params', () => {
      expect(useCommentsZustandSpy).toHaveBeenCalledTimes(1);
      expect(useCommentsZustandSpy).toHaveBeenCalledWith({postId: mockPostId});
    });

    it('should return correct state', () => {
      const expectedState = {
        post: null,
        user: null,
        comments: mockComments,
      };

      expect(renderedHook.result.current).toStrictEqual(expectedState);
    });
  });

  describe('with nullish postId', () => {
    beforeEach(() => {
      useGetPostIdSpy = jest
        .spyOn(useGetPostId, 'useGetPostId')
        .mockImplementation(() => null);
      usePostsZustandSpy = jest
        .spyOn(usePostsZustand, 'usePostsZustand')
        .mockImplementation(() => ({posts: mockPosts}));
      useUsersZustandSpy = jest
        .spyOn(useUsersZustand, 'useUsersZustand')
        .mockImplementation(() => ({users: mockUsers}));
      useCommentsZustandSpy = jest
        .spyOn(useLoadComments, 'useLoadComments')
        .mockImplementation(() => ({comments: mockComments}));

      renderedHook = renderHook(useGetPostViewData);
    });

    it('should call useGetPostId', () => {
      expect(useGetPostIdSpy).toHaveBeenCalledTimes(1);
    });

    it('should call usePostsZustand', () => {
      expect(usePostsZustandSpy).toHaveBeenCalledTimes(1);
    });

    it('should call useUsersZustand', () => {
      expect(useUsersZustandSpy).toHaveBeenCalledTimes(1);
    });

    it('should call useCommentsZustand with correct params', () => {
      expect(useCommentsZustandSpy).toHaveBeenCalledTimes(1);
      expect(useCommentsZustandSpy).toHaveBeenCalledWith({postId: null});
    });

    it('should return correct state', () => {
      const expectedState = {
        post: null,
        user: null,
        comments: mockComments,
      };

      expect(renderedHook.result.current).toStrictEqual(expectedState);
    });
  });

  describe('with non-existent postId', () => {
    const nonExistentUserId = mockUsers.length + 999;
    const mockPostsWithNonExistentUserId = cloneDeep(mockPosts);
    mockPostsWithNonExistentUserId[mockPostId].userId = nonExistentUserId;

    beforeEach(() => {
      useGetPostIdSpy = jest
        .spyOn(useGetPostId, 'useGetPostId')
        .mockImplementation(() => mockPostId);
      usePostsZustandSpy = jest
        .spyOn(usePostsZustand, 'usePostsZustand')
        .mockImplementation(() => ({posts: mockPostsWithNonExistentUserId}));
      useUsersZustandSpy = jest
        .spyOn(useUsersZustand, 'useUsersZustand')
        .mockImplementation(() => ({users: mockUsers}));
      useCommentsZustandSpy = jest
        .spyOn(useLoadComments, 'useLoadComments')
        .mockImplementation(() => ({comments: mockComments}));

      renderedHook = renderHook(useGetPostViewData);
    });

    it('should call useGetPostId', () => {
      expect(useGetPostIdSpy).toHaveBeenCalledTimes(1);
    });

    it('should call usePostsZustand', () => {
      expect(usePostsZustandSpy).toHaveBeenCalledTimes(1);
    });

    it('should call useUsersZustand', () => {
      expect(useUsersZustandSpy).toHaveBeenCalledTimes(1);
    });

    it('should call useCommentsZustand with correct params', () => {
      expect(useCommentsZustandSpy).toHaveBeenCalledTimes(1);
      expect(useCommentsZustandSpy).toHaveBeenCalledWith({
        postId: mockPostId,
      });
    });

    it('should return correct state', () => {
      const expectedState = {
        post: mockPostsWithNonExistentUserId[mockPostId],
        user: null,
        comments: mockComments,
      };

      expect(renderedHook.result.current).toStrictEqual(expectedState);
    });
  });
});
