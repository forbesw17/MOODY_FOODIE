import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

import { useRestaurantContext } from "./RestaurantProvider";

import CustomButton from './UtilComponents/CustomButton';
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

      <CustomButton text="still looking... we'll find you more 😒" type='SECONDARY' style={{width: '90%', marginBottom: 30}} />

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
});

export default RestaurantList;
