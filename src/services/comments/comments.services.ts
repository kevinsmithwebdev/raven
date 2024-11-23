import axios from 'axios';
import {Comment} from '../../types/jsonPlaceholder.types';
import {COMMENTS_URL} from '../apiRoutes';

export const loadCommentsByPostId = async (
  postId: number | null,
): Promise<Comment[] | null> => {
  if (postId === null) {
    return null;
  }

  try {
    const url = `${COMMENTS_URL}?postId=${postId}`;
    const response = await axios.get<Comment[]>(url);

    return response.data;
  } catch (err) {
    throw new Error('Failed to load comments');
  }
};
