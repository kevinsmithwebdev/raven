import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '../pages/Landing/Landing';
import PostView from '../pages/PostView/PostView';
import LandingHeaderLeft from './components/LandingHeaderLeft/LandingHeaderLeft.tsx';
import {renderLandingHeaderRight} from './components/LandingHeaderLeft/LandingHeader.ui.tsx';
import {getPostViewOptions} from './LandingHeaderLeft.helpers.ts';

const RootStack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Landing"
          component={Landing}
          options={({route}) => ({
            title: 'Raven Message App',
            headerLeft: LandingHeaderLeft,
            headerRight: renderLandingHeaderRight(route),
          })}
        />

        <RootStack.Screen
          name="PostView"
          component={PostView}
          options={getPostViewOptions}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
