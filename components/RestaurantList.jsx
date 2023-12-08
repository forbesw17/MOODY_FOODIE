import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

import { useRestaurantContext } from "./RestaurantProvider";

import Restaurant from "./Restaurant";


const RestaurantList = () => {

  const restaurants = useRestaurantContext();

  if (restaurants === null) {
    return (<Text>Loading...</Text>);
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Near you</Text>

      {restaurants.map((restaurant, index) => (
        <Restaurant
          key={index}
          name={restaurant.displayName.text}
          price={restaurant.priceLevel}
          rating={restaurant.rating}
          address={restaurant.shortFormattedAddress}
          photo={restaurant.photos[0].name}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: globalStyles.app.backgroundColor,
    minWidth: "100%",
  },
  title: {
    marginLeft: 20,
    alignSelf: "flex-start",
    fontSize: globalStyles.app.title.fontSize,
    marginBottom: 20,
    color: globalStyles.app.title.color,
    fontWeight: 'bold'
  },
});

export default RestaurantList;
