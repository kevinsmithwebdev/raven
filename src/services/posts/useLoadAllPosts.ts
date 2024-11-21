import {useQuery} from 'react-query';
import {loadAllPosts} from './posts.services';
import {usePostsZustand} from '../../state/posts/posts.zustand';
import {useEffect} from 'react';

export const useLoadAllPosts = (): void => {
  const {setPosts} = usePostsZustand();

  const {data: posts = null} = useQuery('posts-data', loadAllPosts);

  useEffect(() => {
    setPosts(posts);
  }, [posts, setPosts]);
};
