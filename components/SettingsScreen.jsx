import React from "react";
import { StyleSheet, View, Text } from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

import SettingsData from "./SettingsData";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <SettingsData/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    minWidth: "100%",
    backgroundColor: globalStyles.app.backgroundColor,
  },
  title: {
    marginLeft: 20,
    alignSelf: "flex-start",
    marginBottom: 15,
    color: globalStyles.app.title.color,
    fontSize: globalStyles.app.title.fontSize,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
