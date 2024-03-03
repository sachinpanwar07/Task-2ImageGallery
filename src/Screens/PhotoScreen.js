import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {height, moderateScale, width} from '../Styles/Responsive';

const PhotoScreen = ({route}) => {
  const {imageUrl} = route.params;
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.ImageStyle} />
    </View>
  );
};

export default PhotoScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
});
