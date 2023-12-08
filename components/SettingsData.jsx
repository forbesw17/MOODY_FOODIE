import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, Button } from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

const SettingsData = () => {

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.text}>Search Radius</Text>
      <Text style={styles.text}>Dark Mode</Text>
      <Text style={styles.text}>About</Text>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    height: "95%",
    alignItems: "left",
    marginTop: 40,
    marginLeft: 20,
    backgroundColor: globalStyles.app.backgroundColor,
    minWidth: "100%",
  },
  text: {
    fontSize: 16,
    color: globalStyles.app.title.color,
    marginBottom: 5,
    fontWeight: "bold",
  },
});

export default SettingsData;
