import {useQuery} from 'react-query';
import {loadAllPosts} from './posts.services';
import {usePostsZustand} from '../../state/posts/posts.zustand';
import {useEffect} from 'react';

export const useLoadAllPosts = (): void => {
  const {setPosts} = usePostsZustand();

  const {data: posts = null} = useQuery('posts-data', loadAllPosts);

  useEffect(() => {
    // shuffling just to make the fake data a little more visually interesting
    const shuffledPosts =
      posts
        ?.map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value) ?? null;

    setPosts(shuffledPosts);
  }, [posts, setPosts]);
};
