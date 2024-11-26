import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../../navigation/NavigationStack';

export type UseGetPostIdState = number | null;

export const useGetPostId = (): UseGetPostIdState => {
  const route = useRoute<RouteProp<RootStackParams, 'PostView'>>();
  const postId = route.params.postId;

  return postId ?? null;
};
