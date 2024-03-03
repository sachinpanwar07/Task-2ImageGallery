import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScren';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
  
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}  />
      </Drawer.Navigator>
    
  );
};

export default DrawerStack;

const styles = StyleSheet.create({});
