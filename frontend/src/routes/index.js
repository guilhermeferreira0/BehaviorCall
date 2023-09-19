import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/login';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={Login}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
}

export default Routes;