import axios from 'axios';
import {User} from '../../types/jsonPlaceholder.types';
import {USERS_URL} from '../../constants/apiRoutes';

export const loadUsers = async (): Promise<User[] | null> => {
  try {
    const response = await axios.get<User[]>(USERS_URL);

    return response.data;
  } catch (err) {
    throw new Error('Failed to load users');
  }
};
