import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import Route from './src/Route';
import {AuthProvider} from './src/provider/AuthProvider';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {DataProvider} from './src/provider/DataProvider';
enableScreens();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00453f',
    accent: '#009387',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <DataProvider>
          <Route />
        </DataProvider>
      </AuthProvider>
    </PaperProvider>
  );
};
export default App;
