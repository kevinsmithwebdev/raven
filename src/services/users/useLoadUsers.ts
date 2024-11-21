import {useEffect} from 'react';
import {loadUsers} from './users.services';
import {useQuery} from 'react-query';
import {useUsersZustand} from '../../state/users/users.zustand';

export const useLoadUsers = (): void => {
  const {setUsers} = useUsersZustand();
  const {data: users = null} = useQuery('users-data', loadUsers);

  useEffect(() => {
    setUsers(users);
  }, [setUsers, users]);
};
