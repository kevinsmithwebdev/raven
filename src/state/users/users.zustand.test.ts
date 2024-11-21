import {
  act,
  renderHook,
  RenderHookResult,
  waitFor,
} from '@testing-library/react-native';
import {useUsersZustand} from './users.zustand';
import {UsersZustandMethods, UsersZustandState} from './users.zustand.types';
import {mockUsers} from '../../__mocks__/users.mocks';

let renderedHook: RenderHookResult<UsersZustandState, undefined>;

const expectedMethods: UsersZustandMethods = {
  getUserById: expect.any(Function),
  setUsers: expect.any(Function),
  reset: expect.any(Function),
};

const expectedInitialState: UsersZustandState = {
  ...expectedMethods,
  users: null,
};

const expectedInitialStateWithUsers: UsersZustandState = {
  ...expectedInitialState,
  users: mockUsers,
};

describe('users zustand', () => {
  describe('initial state', () => {
    beforeEach(() => {
      renderedHook = renderHook(useUsersZustand);
    });

    it('should return initial state', () => {
      expect(renderedHook.result.current).toStrictEqual(expectedInitialState);
    });
  });

  describe('methods', () => {
    describe('setUsers', () => {
      describe('can set full value', () => {
        beforeEach(() => {
          renderedHook = renderHook(useUsersZustand);

          waitFor(() => expect(renderedHook.result.current.users).toBeNull());

          act(() => renderedHook.result.current.setUsers(mockUsers));
        });

        it('should return initial state', () => {
          expect(renderedHook.result.current).toStrictEqual(
            expectedInitialStateWithUsers,
          );
        });
      });

      describe('can set null value', () => {
        beforeEach(() => {
          renderedHook = renderHook(useUsersZustand);

          act(renderedHook.result.current.reset);

          act(() => renderedHook.result.current.setUsers(mockUsers));
          waitFor(() =>
            expect(renderedHook.result.current.users).toStrictEqual(mockUsers),
          );

          act(() => renderedHook.result.current.setUsers(null));
        });

        it('should return initial state', () => {
          expect(renderedHook.result.current).toStrictEqual(
            expectedInitialState,
          );
        });
      });
    });

    describe('getUserById', () => {
      describe('when user exists', () => {
        const userId = 3;
        const expectedUser = mockUsers.find(user => user.id === userId);

        beforeEach(() => {
          renderedHook = renderHook(useUsersZustand);

          act(renderedHook.result.current.reset);
          act(() => renderedHook.result.current.setUsers(mockUsers));

          waitFor(() =>
            expect(renderedHook.result.current.users).toStrictEqual(mockUsers),
          );

          act(() => renderedHook.result.current.setUsers(mockUsers));
        });

        it('should return correct user', () => {
          expect(renderedHook.result.current.getUserById(userId)).toStrictEqual(
            expectedUser,
          );
        });
      });

      describe('when no user', () => {
        const userId = -1;

        beforeEach(() => {
          renderedHook = renderHook(useUsersZustand);

          act(renderedHook.result.current.reset);
          act(() => renderedHook.result.current.setUsers(mockUsers));

          waitFor(() =>
            expect(renderedHook.result.current.users).toStrictEqual(mockUsers),
          );

          act(() => renderedHook.result.current.setUsers(mockUsers));
        });

        it('should return null', () => {
          expect(renderedHook.result.current.getUserById(userId)).toBeNull();
        });
      });

      describe('when users not loaded', () => {
        const userId = 3;

        beforeEach(() => {
          renderedHook = renderHook(useUsersZustand);

          act(renderedHook.result.current.reset);

          waitFor(() => expect(renderedHook.result.current.users).toBeNull());
        });

        it('should return null', () => {
          expect(renderedHook.result.current.getUserById(userId)).toBeNull();
        });
      });
    });

    describe('reset', () => {
      beforeEach(() => {
        renderedHook = renderHook(useUsersZustand);

        act(() => renderedHook.result.current.setUsers(mockUsers));
        waitFor(() =>
          expect(renderedHook.result.current.users).toStrictEqual(mockUsers),
        );

        act(renderedHook.result.current.reset);
      });

      it('should return initial state', () => {
        expect(renderedHook.result.current).toStrictEqual(expectedInitialState);
      });
    });
  });
});
