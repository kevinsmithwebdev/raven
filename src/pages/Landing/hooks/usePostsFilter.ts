import {useNavigation} from '@react-navigation/native';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {DeviceEventEmitter} from 'react-native';
import {EVENTS} from '../../../constants/events';
import {Post} from '../../../types/jsonPlaceholder.types';
import {usePostsZustand} from '../../../state/posts/posts.zustand';
import {StackNavigation} from '../../../navigation/NavigationStack';

export interface UsePostFilterState {
  isFilterModalVisible: boolean;
  closeFilterModal: () => void;
  selectedFilterUserId: number | null;
  setSelectedFilterUserId: Dispatch<SetStateAction<number | null>>;
  filteredPosts: Post[] | null;
}

export const usePostsFilter = (): UsePostFilterState => {
  const navigation = useNavigation<StackNavigation>();
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [selectedFilterUserId, setSelectedFilterUserId] = useState<
    number | null
  >(null);
  const {posts} = usePostsZustand();

  const closeFilterModal = useCallback(
    () => setIsFilterModalVisible(false),
    [],
  );

  const openFilterDirty = useCallback(() => setIsFilterModalVisible(true), []);

  useEffect(
    () =>
      navigation.setParams({
        isFilterDirty: typeof selectedFilterUserId === 'number',
      }),
    [isFilterModalVisible, navigation, selectedFilterUserId],
  );

  useEffect(() => {
    DeviceEventEmitter.addListener(EVENTS.filterIconPress, openFilterDirty);

    return () => {
      DeviceEventEmitter.removeAllListeners(EVENTS.filterIconPress);
    };
  });

  const filteredPosts = useMemo(() => {
    if (!posts) {
      return null;
    }

    if (selectedFilterUserId === null) {
      return posts;
    }

    return posts.filter(post => post.userId === selectedFilterUserId);
  }, [posts, selectedFilterUserId]);

  return {
    isFilterModalVisible,
    closeFilterModal,
    selectedFilterUserId,
    setSelectedFilterUserId,
    filteredPosts,
  };
};
