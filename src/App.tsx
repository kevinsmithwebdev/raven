import React from 'react';
import {View} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import Landing from './pages/Landing/Landing';
import {styles} from './App.styles';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <View testID="app" style={styles.wrapper}>
      <Landing />
    </View>
  </QueryClientProvider>
);

export default App;
