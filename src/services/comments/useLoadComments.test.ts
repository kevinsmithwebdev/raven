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

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockPostId = 59;

beforeEach(jest.clearAllMocks);

describe('useLoadComments', () => {
  describe('returning data', () => {
    beforeEach(() => {
      jest.spyOn(reactQuery, 'useQuery').mockImplementation(props => {
        props.queryFn();
        return {data: mockComments};
      });
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
    beforeEach(() => {
      jest.spyOn(reactQuery, 'useQuery').mockImplementation(props => {
        props.queryFn();
        return {data: null};
      });
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
