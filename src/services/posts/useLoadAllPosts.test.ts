import {renderHook} from '@testing-library/react-native';
import * as reactQuery from 'react-query';
import {useLoadAllPosts} from './useLoadAllPosts';
import * as usePostsZustand from '../../state/posts/posts.zustand';
import {mockPosts} from '../../__mocks__/posts.mocks';

const setPosts = jest.fn();

beforeEach(jest.clearAllMocks);

describe('useLoadAllPosts', () => {
  describe('with data', () => {
    beforeEach(() => {
      jest
        .spyOn(usePostsZustand, 'usePostsZustand')
        .mockReturnValue({setPosts});

      jest.spyOn(reactQuery, 'useQuery').mockReturnValue({
        data: mockPosts,
      } as reactQuery.UseQueryResult);

      renderHook(useLoadAllPosts);
    });

    it('should call setPosts with correct posts', () => {
      expect(setPosts).toHaveBeenCalledTimes(1);
      expect(setPosts).toHaveBeenCalledWith(expect.arrayContaining(mockPosts));
    });
  });

  describe('with no data returned', () => {
    beforeEach(() => {
      jest
        .spyOn(usePostsZustand, 'usePostsZustand')
        .mockReturnValue({setPosts});

      jest.spyOn(reactQuery, 'useQuery').mockReturnValue({
        data: undefined,
      } as reactQuery.UseQueryResult);

      renderHook(useLoadAllPosts);
    });

    // it('should call setPosts with correct posts', () => {
    //   expect(setPosts).toHaveBeenCalledTimes(1);
    //   expect(setPosts).toHaveBeenCalledWith(null);
    // });
  });
});
