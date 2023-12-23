import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

import { useRestaurantContext } from "./RestaurantProvider";

import RestaurantList from "./RestaurantList";

const HomeScreen = () => {
  const restaurants = useRestaurantContext();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Near you</Text>

      <RestaurantList />

    </View>
  );
};

// STYLES FOR HOME SCREEN
const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: globalStyles.app.backgroundColor,
  },
  title: {
    marginLeft: 20,
    alignSelf: "flex-start",
    fontSize: globalStyles.app.title.fontSize,
    marginBottom: 15,
    color: globalStyles.app.title.color,
    fontWeight: 'bold'
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    color: globalStyles.app.title.color,
    fontSize: 20,
  },
});

export default HomeScreen;
