// components/NavBar.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{ position: 'absolute', left: 0, top: 0 }}>
      <TouchableOpacity onPress={handleHomePress}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
