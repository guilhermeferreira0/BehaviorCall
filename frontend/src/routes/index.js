import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import Initial from '../pages/initial';
import Login from '../pages/login';
import Home from '../pages/home';

const Stack = createNativeStackNavigator();

function Routes() {
  const [fontsLoaded] = useFonts({
    'Oswald': require('../../assets/fonts/Oswald-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={{headerShown: false}}
        style={{fontFamily: 'Oswald'}}
      />

      <Stack.Screen
        name="SignIn"
        component={Login}
        options={{headerShown: false}}
        style={{fontFamily: 'Oswald'}}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
        style={{fontFamily: 'Oswald'}}
      />

    </Stack.Navigator>
  );
}

export default Routes;