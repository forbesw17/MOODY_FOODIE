import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

import { useRestaurantContext } from "./RestaurantProvider";

import RestaurantList from "./RestaurantList";

const HomeScreen = () => {
  const restaurants = useRestaurantContext();

  return (
    <View style={globalStyles.screen.container}>

      <Text style={globalStyles.screen.title}>Near you</Text>

      <RestaurantList />

    </View>
  );
};

export default HomeScreen;
