import {useLoadComments} from '../../../services/comments/useLoadComments';
import {usePostsZustand} from '../../../state/posts/posts.zustand';
import {useUsersZustand} from '../../../state/users/users.zustand';
import {Comment, Post, User} from '../../../types/jsonPlaceholder.types';
import {useGetPostId} from './useGetPostId';

export interface UserGetPostViewDataState {
  post: Post | null;
  user: User | null;
  comments: Comment[] | null;
}

export const useGetPostViewData = (): UserGetPostViewDataState => {
  const postId = useGetPostId();
  const {posts} = usePostsZustand();
  const {users} = useUsersZustand();
  const {comments} = useLoadComments({postId});

  const post = postId === null ? null : posts?.[postId] ?? null;
  const user = post?.userId ? users?.[post.userId] ?? null : null;

  return {post, user, comments};
};
