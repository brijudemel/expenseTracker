import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import Route from "./src/Route";
import {AuthProvider,AuthContext} from './src/provider/AuthProvider';

enableScreens();
const App=()=> {
  return (
    
    <AuthProvider>
      <Route />
    </AuthProvider>
    
  );
}
export default App;
