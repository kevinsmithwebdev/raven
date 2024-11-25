import React from 'react';
import {DeviceEventEmitter, TouchableOpacity} from 'react-native';
import {EVENTS} from '../../../constants/events';
import FilterIcon from '../../../assets/icons/FilterIcon';

export const renderLandingHeaderRight = route => () =>
  (
    <TouchableOpacity
      hitSlop={20}
      onPress={() => DeviceEventEmitter.emit(EVENTS.filterIconPress)}>
      <FilterIcon isDirty={!!route?.params?.isFilterDirty} />
    </TouchableOpacity>
  );
