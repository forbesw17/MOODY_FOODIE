import React from "react";
import { SafeAreaView, View, StyleSheet, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import Navigation from "./components/Navigation";

const App = () => {
  return (
    <SafeAreaView style={onAndroid ? styles.rootANDROID : styles.rootIOS}>
      <StatusBar backgroundColor="white" />
      <Navigation />
    </SafeAreaView>
  );
};

const onAndroid = Platform.OS === "ios" ? false : true;

const styles = StyleSheet.create({
  rootIOS: {
    height: "100%",
  },
  rootANDROID: {
    height: "100%",
    paddingTop: 35
  }
});

export default App;
