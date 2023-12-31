import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Initial from '../pages/initial';
import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';
import Contact from '../pages/contacts';
import Chat from '../pages/chat';
import Schedule from '../pages/schedule';
import Search from '../pages/search';

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
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Schedule"
        component={Schedule}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />


    </Stack.Navigator>
  );
}

export default Routes;