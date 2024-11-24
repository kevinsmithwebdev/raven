import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {DeviceEventEmitter} from 'react-native';
import {EVENTS} from '../../../constants/events';

export interface UsePostFilterState {
  isFilterModalVisible: boolean;
  closeFilterModal: () => void;
  selectedFilterUserId: number | null;
  setSelectedFilterUserId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const usePostsFilter = (): UsePostFilterState => {
  const navigation = useNavigation();
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [selectedFilterUserId, setSelectedFilterUserId] = useState<
    number | null
  >(null);

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

  return {
    isFilterModalVisible,
    closeFilterModal,
    selectedFilterUserId,
    setSelectedFilterUserId,
  };
};
