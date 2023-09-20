import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Initial from '../pages/initial';
import Login from '../pages/login';
import Home from '../pages/home';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SignIn"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />



    </Stack.Navigator>
  );
}

export default Routes;