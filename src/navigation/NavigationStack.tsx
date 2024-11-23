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
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            title: 'Raven Message App',
          }}
        />
        <Stack.Screen
          name="PostView"
          component={PostView}
          options={({route}) => {
            console.log('asdf route', route);
            return {
              title: `Post: ${route.params.postName}`,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
