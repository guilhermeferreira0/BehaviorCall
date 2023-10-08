import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Notify from 'expo-notifications';
import { useFonts } from 'expo-font';
import Routes from './src/routes';

Notify.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowAlert: true,
    shouldSetBadge: true,
  })
})

export default function App() {

  const [fontsLoaded] = useFonts({
    'Oswald-Regular': require('./assets/fonts/Oswald-Regular.ttf'),
    'Oswald-Bold': require('./assets/fonts/Oswald-Bold.ttf'),
    'Oswald-SemiBold': require('./assets/fonts/Oswald-SemiBold.ttf'),
    'Oswald-Medium': require('./assets/fonts/Oswald-Medium.ttf'),
    'Oswald-Light': require('./assets/fonts/Oswald-Light.ttf'),
    'Oswald-ExtraLight': require('./assets/fonts/Oswald-ExtraLight.ttf'),
  });

  if(!fontsLoaded) {return null}

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor='#3DB1D4'
        barStyle='light-content'
      />

      <Routes />
    </NavigationContainer>
  );
}
