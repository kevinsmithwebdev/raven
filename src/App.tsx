import React from 'react';
import {View} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import MessagesList from './pages/MessagesList/MessagesList';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View testID="app">
        <MessagesList />
      </View>
    </QueryClientProvider>
  );
};

export default App;
