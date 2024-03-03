import { StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import MainStack from './src/Navigation/MainStack';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" /> 
      <MainStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
