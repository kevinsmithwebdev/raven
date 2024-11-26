import React from 'react';
import {DeviceEventEmitter, TouchableOpacity} from 'react-native';
import {EVENTS} from '../../../constants/events';
import FilterIcon from '../../../assets/icons/FilterIcon';
import {RouteProp} from '@react-navigation/native';
import {RootStackParams} from '../../NavigationStack';

export const renderLandingHeaderRight =
  (route: RouteProp<RootStackParams, 'Landing'>) => () =>
    (
      <TouchableOpacity
        hitSlop={20}
        onPress={() => DeviceEventEmitter.emit(EVENTS.filterIconPress)}>
        <FilterIcon isDirty={!!route?.params?.isFilterDirty} />
      </TouchableOpacity>
    );
