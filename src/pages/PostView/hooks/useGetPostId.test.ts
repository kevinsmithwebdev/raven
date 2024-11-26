import {renderHook, RenderHookResult} from '@testing-library/react-native';
import {useGetPostId, UseGetPostIdState} from './useGetPostId';

jest.mock('@react-navigation/native');

let renderedHook: RenderHookResult<UseGetPostIdState, undefined>;

describe('useGetPostId', () => {
  describe('with full data', () => {
    const mockRoute = {params: {postId: 127}};

    beforeEach(() => {
      jest
        .spyOn(require('@react-navigation/native'), 'useRoute')
        .mockReturnValue(mockRoute);

      renderedHook = renderHook(useGetPostId);
    });

    it('should return correct postId', () => {
      expect(renderedHook.result.current).toBe(127);
    });
  });

  describe('with undefined postId data', () => {
    const mockRoute = {params: {postId: undefined}};

    beforeEach(() => {
      jest
        .spyOn(require('@react-navigation/native'), 'useRoute')
        .mockReturnValue(mockRoute);

      renderedHook = renderHook(useGetPostId);
    });

    it('should return correct postId', () => {
      expect(renderedHook.result.current).toBe(null);
    });
  });
});
