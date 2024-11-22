import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '../pages/Landing/Landing';
import PostView from '../pages/PostView/PostView';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="PostView" component={PostView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
