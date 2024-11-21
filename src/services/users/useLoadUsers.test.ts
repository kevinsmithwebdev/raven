import {renderHook, RenderHookResult} from '@testing-library/react-native';
import {useLoadUsers, UseLoadUsersState} from './useLoadUsers';
import * as reactQuery from 'react-query';

let renderedHook: RenderHookResult<UseLoadUsersState, undefined>;

describe('useLoadUsers', () => {
  describe('normal flow', () => {
    beforeEach(() => {
      jest.spyOn(reactQuery, 'useQuery').mockReturnValue({
        data: 'mock-users',
        isLoading: false,
      } as reactQuery.UseQueryResult);

      renderedHook = renderHook(useLoadUsers);
    });

    it('should return data state', () => {
      expect(renderedHook.result.current).toStrictEqual({
        isLoading: false,
        users: 'mock-users',
      });
    });
  });

  describe('loadind', () => {
    beforeEach(() => {
      jest.spyOn(reactQuery, 'useQuery').mockReturnValue({
        data: undefined,
        isLoading: true,
      } as reactQuery.UseQueryResult);

      renderedHook = renderHook(useLoadUsers);
    });

    it('should return loading state', () => {
      expect(renderedHook.result.current).toStrictEqual({
        isLoading: true,
        users: null,
      });
    });
  });
});
