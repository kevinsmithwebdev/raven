import {useQuery} from 'react-query';
import {loadAllPosts} from './posts.services';
import {Post} from '../../types/jsonPlaceholder.types';

export interface UseLoadAllPostsState {
  posts: Post[] | null;
  isLoading: boolean;
}

export const useLoadAllPosts = (): UseLoadAllPostsState => {
  const {data: posts = null, isLoading} = useQuery('posts-data', loadAllPosts);

  return {posts, isLoading};
};
