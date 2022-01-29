import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {AppNavigator, AuthNavigator} from 'navigations';
import {useStorage} from 'hooks';

const App = () => {
  const [user] = useStorage('user', null);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {user?.Token ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
