import {renderHook, RenderHookResult} from '@testing-library/react-native';
import {
  useLoadComments,
  UseLoadCommentsProps,
  UseLoadCommentsState,
} from './useLoadComments';
import * as reactQuery from 'react-query';
import {mockComments} from '../../__mocks__/comments.mocks';
import axios from 'axios';

let renderedHook: RenderHookResult<UseLoadCommentsState, UseLoadCommentsProps>;

export type UseQueryMock =
  | ((
      queryKey: reactQuery.QueryKey,
      queryFn: reactQuery.QueryFunction<unknown, reactQuery.QueryKey>,
      options?:
        | Omit<
            reactQuery.UseQueryOptions<
              unknown,
              unknown,
              unknown,
              reactQuery.QueryKey
            >,
            'queryKey' | 'queryFn'
          >
        | undefined,
    ) => reactQuery.UseQueryResult<unknown, unknown>)
  | undefined;

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockPostId = 59;

beforeEach(jest.clearAllMocks);

describe('useLoadComments', () => {
  describe('returning data', () => {
    const mockUseQuery = ((props: {queryFn: Function}) => {
      props.queryFn();
      return {data: mockComments};
    }) as unknown as UseQueryMock;

    beforeEach(() => {
      jest.spyOn(reactQuery, 'useQuery').mockImplementation(mockUseQuery);
      mockedAxios.get.mockResolvedValue(mockComments);

      renderedHook = renderHook(() => useLoadComments({postId: mockPostId}));
    });

    it('should call useQuery with correct params', () => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/comments?postId=59',
      );
    });

    it('should return correct state', () => {
      expect(renderedHook.result.current).toStrictEqual({
        comments: mockComments,
      });
    });
  });

  describe('returning undefined', () => {
    const mockUseQuery = ((props: {queryFn: Function}) => {
      props.queryFn();
      return {data: null};
    }) as unknown as UseQueryMock;

    beforeEach(() => {
      jest.spyOn(reactQuery, 'useQuery').mockImplementation(mockUseQuery);
      mockedAxios.get.mockResolvedValue(mockComments);

      renderedHook = renderHook(() => useLoadComments({postId: mockPostId}));
    });

    it('should call useQuery with correct params', () => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/comments?postId=59',
      );
    });

    it('should return correct state', () => {
      expect(renderedHook.result.current).toStrictEqual({
        comments: null,
      });
    });
  });
});
