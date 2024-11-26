import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import NavigationStack from './navigation/NavigationStack';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationStack />
  </QueryClientProvider>
);

export default App;
