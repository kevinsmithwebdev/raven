import axios from 'axios';
import {Post} from '../../types/jsonPlaceholder.types';
import {POSTS_URL} from '../../constants/apiRoutes';

export const loadAllPosts = async (): Promise<Post[] | null> => {
  try {
    const response = await axios.get(POSTS_URL);

    return response.data;
  } catch (err) {
    throw new Error('Failed to load all posts');
  }
};
