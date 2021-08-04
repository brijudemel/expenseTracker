import AppStack from './stack/AppStack';
import AuthStack from './stack/AuthStack';
import {AuthContext} from './provider/AuthProvider';
import auth from '@react-native-firebase/auth';
import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
const Route = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(false);
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  } //loading

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Route;
