// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScren from '../Screens/HomeScren';
import NavBar from '../Components/NavBar';
import DrawerStack from './DrawerStack';
import PhotoScreen from '../Screens/PhotoScreen';
const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Drawer" component={DrawerStack}options={{headerShown:false}} />
        <Stack.Screen name='PhotoScreen' component={PhotoScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
