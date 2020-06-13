import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Box from './pages/Box';
import Main from './pages/Main';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="Box" component={Box} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
