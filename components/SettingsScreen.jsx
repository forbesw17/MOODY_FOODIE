import React from "react";
import { StyleSheet, View, Text } from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

import SettingsData from "./SettingsData";

const SettingsScreen = () => {
  return (
    <View style={globalStyles.screen.container}>
      <Text style={globalStyles.screen.title}>Settings</Text>
      <SettingsData/>
    </View>
  );
};

export default SettingsScreen;
