import {renderHook, RenderHookResult} from '@testing-library/react-native';
import * as reactQuery from 'react-query';
import {useLoadAllPosts, UseLoadAllPostsState} from './useLoadAllPosts';

let renderedHook: RenderHookResult<UseLoadAllPostsState, undefined>;

describe('useLoadAllPosts', () => {
  describe('normal flow', () => {
    beforeEach(() => {
      jest.spyOn(reactQuery, 'useQuery').mockReturnValue({
        data: 'mock-posts',
        isLoading: false,
      } as reactQuery.UseQueryResult);

      renderedHook = renderHook(useLoadAllPosts);
    });

    it('should return data state', () => {
      expect(renderedHook.result.current).toStrictEqual({
        isLoading: false,
        posts: 'mock-posts',
      });
    });
  });

  describe('loading', () => {
    beforeEach(() => {
      jest.spyOn(reactQuery, 'useQuery').mockReturnValue({
        data: undefined,
        isLoading: true,
      } as reactQuery.UseQueryResult);

      renderedHook = renderHook(useLoadAllPosts);
    });

    it('should return loading state', () => {
      expect(renderedHook.result.current).toStrictEqual({
        isLoading: true,
        posts: null,
      });
    });
  });
});
