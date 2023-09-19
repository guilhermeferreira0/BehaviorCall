import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Oswald': require('./assets/fonts/Oswald-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

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
