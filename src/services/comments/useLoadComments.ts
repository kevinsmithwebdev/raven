import {useQuery} from 'react-query';
import {Comment} from '../../types/jsonPlaceholder.types';
import {loadCommentsByPostId} from './comments.services';

export interface UseLoadCommentsProps {
  postId: number | null;
}

export interface UseLoadCommentsState {
  comments: Comment[] | null;
}

export const useLoadComments = ({
  postId,
}: UseLoadCommentsProps): UseLoadCommentsState => {
  const {data} = useQuery({
    queryKey: ['comments-data', postId],
    queryFn: () => loadCommentsByPostId(postId),
  });

  return {comments: data ?? null};
};
