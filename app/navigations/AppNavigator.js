import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeScreen} from 'screens';

import {routes} from './routes';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <FlashMessage
        style={styles.flash}
        duration={3000}
        position="top"
        floating
      />
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: true}}>
        <Stack.Screen name={routes.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  flash: {
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
  },
});
