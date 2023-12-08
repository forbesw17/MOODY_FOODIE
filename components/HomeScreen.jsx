import React, { useState, useEffect, useContext } from "react";
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

import { useRestaurantContext } from "./RestaurantProvider";

import FeedHeader from "./FeedHeader";
import RestaurantList from "./RestaurantList";

const HomeScreen = () => {
  const restaurants = useRestaurantContext();

  return (
    <View style={styles.container}>
      {/* <FeedHeader /> */}

      {restaurants && <RestaurantList />}
      {!restaurants && <Text style={styles.text}>Loading</Text>}
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
    fontSize: 24,
    marginBottom: 20,
    color: globalStyles.app.title.color,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    color: globalStyles.app.title.color,
    fontSize: 20,
  },
});

export default HomeScreen;
