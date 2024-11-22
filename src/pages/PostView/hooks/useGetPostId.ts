import {useRoute} from '@react-navigation/native';

export type UseGetPostIdState = number | null;

export const useGetPostId = (): UseGetPostIdState => {
  const route = useRoute();
  const postId = route?.params?.postId;

  return postId ?? null;
};
