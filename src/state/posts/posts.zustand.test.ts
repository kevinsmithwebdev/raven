import {
  act,
  renderHook,
  RenderHookResult,
  waitFor,
} from '@testing-library/react-native';
import {usePostsZustand} from './posts.zustand';
import {PostsZustandMethods, PostsZustandState} from './posts.zustand.types';
import {mockPosts} from '../../__mocks__/posts.mocks';

let renderedHook: RenderHookResult<PostsZustandState, undefined>;

const expectedMethods: PostsZustandMethods = {
  setPosts: expect.any(Function),
  reset: expect.any(Function),
};

const expectedInitialState: PostsZustandState = {
  ...expectedMethods,
  posts: null,
};

const expectedInitialStateWithPosts: PostsZustandState = {
  ...expectedInitialState,
  posts: mockPosts,
};

describe('posts zustand', () => {
  describe('initial state', () => {
    beforeEach(() => {
      renderedHook = renderHook(usePostsZustand);
    });

    it('should return initial state', () => {
      expect(renderedHook.result.current).toStrictEqual(expectedInitialState);
    });
  });

  describe('methods', () => {
    describe('setPosts', () => {
      describe('can set full value', () => {
        beforeEach(() => {
          renderedHook = renderHook(usePostsZustand);

          waitFor(() => expect(renderedHook.result.current.posts).toBeNull());

          act(() => renderedHook.result.current.setPosts(mockPosts));
        });

        it('should return initial state', () => {
          expect(renderedHook.result.current).toStrictEqual(
            expectedInitialStateWithPosts,
          );
        });
      });

      describe('can set null value', () => {
        beforeEach(() => {
          renderedHook = renderHook(usePostsZustand);

          act(renderedHook.result.current.reset);

          act(() => renderedHook.result.current.setPosts(mockPosts));
          waitFor(() =>
            expect(renderedHook.result.current.posts).toStrictEqual(mockPosts),
          );

          act(() => renderedHook.result.current.setPosts(null));
        });

        it('should return initial state', () => {
          expect(renderedHook.result.current).toStrictEqual(
            expectedInitialState,
          );
        });
      });
    });

    describe('reset', () => {
      beforeEach(() => {
        renderedHook = renderHook(usePostsZustand);

        act(() => renderedHook.result.current.setPosts(mockPosts));
        waitFor(() =>
          expect(renderedHook.result.current.posts).toStrictEqual(mockPosts),
        );

        act(renderedHook.result.current.reset);
      });

      it('should return initial state', () => {
        expect(renderedHook.result.current).toStrictEqual(expectedInitialState);
      });
    });
  });
});
