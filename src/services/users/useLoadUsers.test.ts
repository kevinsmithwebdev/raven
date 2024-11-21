import {renderHook} from '@testing-library/react-native';
import {useLoadUsers} from './useLoadUsers';
import * as reactQuery from 'react-query';
import {mockUsers} from '../../__mocks__/users.mocks';
import * as useUsersZustand from '../../state/users/users.zustand';
import {loadUsers} from './users.services';

const setUsers = jest.fn();

let useQuerySpy: jest.SpyInstance;

beforeEach(jest.clearAllMocks);

describe('useLoadUsers', () => {
  describe('with data', () => {
    beforeEach(() => {
      jest
        .spyOn(useUsersZustand, 'useUsersZustand')
        .mockReturnValue({setUsers});

      useQuerySpy = jest.spyOn(reactQuery, 'useQuery').mockReturnValue({
        data: mockUsers,
      } as reactQuery.UseQueryResult);

      renderHook(useLoadUsers);
    });

    it('should call useQuery with correct params', () => {
      expect(useQuerySpy).toHaveBeenCalledTimes(1);
      expect(useQuerySpy).toHaveBeenCalledWith('users-data', loadUsers);
    });

    it('should call setUsers with new users', () => {
      expect(setUsers).toHaveBeenCalledTimes(1);
      expect(setUsers).toHaveBeenCalledWith(mockUsers);
    });
  });

  describe('with no data', () => {
    beforeEach(() => {
      jest.spyOn(reactQuery, 'useQuery').mockReturnValue({
        data: undefined,
      } as reactQuery.UseQueryResult);

      renderHook(useLoadUsers);
    });

    it('should call useQuery with correct params', () => {
      expect(useQuerySpy).toHaveBeenCalledTimes(1);
      expect(useQuerySpy).toHaveBeenCalledWith('users-data', loadUsers);
    });

    it('should call setUsers with null', () => {
      expect(setUsers).toHaveBeenCalledTimes(1);
      expect(setUsers).toHaveBeenCalledWith(null);
    });
  });
});
