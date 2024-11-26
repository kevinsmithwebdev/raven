import {RouteProp} from '@react-navigation/native';
import {RootStackParams} from './NavigationStack';

interface GetPostViewOptionsProps {
  route: RouteProp<RootStackParams, 'PostView'>;
}

interface GetPostViewOptionsReturn {
  title: string;
}

export const getPostViewOptions = ({
  route,
}: GetPostViewOptionsProps): GetPostViewOptionsReturn => ({
  title: `Post: ${route.params.postTitle}`,
});
