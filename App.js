import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Navigation from './components/Navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor='#003'/>
      <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
});

export default App;