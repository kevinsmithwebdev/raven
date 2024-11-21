import {create} from 'zustand/react';
import {PostsZustandState, PostsZustandValues} from './posts.zustand.types';

export const initialPostsValues: PostsZustandValues = {
  posts: null,
};

export const usePostsZustand = create<PostsZustandState>()(set => ({
  ...initialPostsValues,

  setPosts: posts => set({posts}),

  reset: () => set(initialPostsValues),
}));
