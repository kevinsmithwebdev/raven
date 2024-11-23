import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '../pages/Landing/Landing';
import PostView from '../pages/PostView/PostView';
import {TouchableOpacity} from 'react-native';
import FilterIcon from '../assets/icons/FilterIcon.tsx';
import {DeviceEventEmitter} from 'react-native';
import {EVENTS} from '../constants/envents.ts';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={({route}) => ({
            title: 'Raven Message App',
            headerRight: () => (
              <TouchableOpacity
                hitSlop={20}
                onPress={() => DeviceEventEmitter.emit(EVENTS.filterIconPress)}>
                <FilterIcon isDirty={route?.params?.isFilterDirty} />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="PostView"
          component={PostView}
          options={({route}) => ({title: `Post: ${route.params.postName}`})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
