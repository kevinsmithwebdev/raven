import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {DeviceEventEmitter} from 'react-native';
import {EVENTS} from '../../../constants/envents';

export const usePostsFilter = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const toggleFilterDirty = useCallback(
    () => setIsFilterModalOpen(s => !s),
    [],
  );
  const navigation = useNavigation();

  useEffect(
    () =>
      navigation.setParams({
        isFilterDirty: isFilterModalOpen,
      }),
    [isFilterModalOpen, navigation],
  );

  useEffect(() => {
    DeviceEventEmitter.addListener(EVENTS.filterIconPress, toggleFilterDirty);

    return () => {
      DeviceEventEmitter.removeAllListeners(EVENTS.filterIconPress);
    };
  });
};
