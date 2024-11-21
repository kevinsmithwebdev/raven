import {create} from 'zustand/react';
import {UsersZustandState, UsersZustandValues} from './users.zustand.types';

export const initialUsersValues: UsersZustandValues = {
  users: null,
};

export const useUsersZustand = create<UsersZustandState>((set, get) => ({
  ...initialUsersValues,

  setUsers: users => set({users}),

  getUserById: userId => {
    const {users} = get();
    const foundUser = users?.find(user => user.id === userId);
    return foundUser ?? null;
  },

  reset: () => set(initialUsersValues),
}));
