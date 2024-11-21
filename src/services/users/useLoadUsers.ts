import {User} from '../../types/jsonPlaceholder.types';
import {loadUsers} from './users.services';
import {useQuery} from 'react-query';

export interface UseLoadUsersState {
  users: User[] | null;
  isLoading: boolean;
}

export const useLoadUsers = (): UseLoadUsersState => {
  const {data: users = null, isLoading} = useQuery('users-data', loadUsers);

  return {users: users, isLoading};
};
