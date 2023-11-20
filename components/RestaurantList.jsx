import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

import { fetchNearbyPlaces } from "../server/NearbyPlacesService";

import Restaurant from "./Restaurant";

const RestaurantList = ({ latitude, longitude }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchNearbyPlaces(
          `${latitude},${longitude}`,
          1500,
          "restaurant",
          process.env.EXPO_PUBLIC_API_KEY
        );

        setRestaurants(data.results || []);

        // Do something with the data in your component
      } catch (error) {
        // Handle the error
        console.error("Error in Restaurant List:", error);
      }
    }

    fetchData();
  }, [latitude, longitude]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Near you</Text>

      {restaurants.map((restaurant, index) => (
        <Restaurant
          key={index}
          photoID={restaurant.photos[0].photo_reference}
          name={restaurant.name}
          price={restaurant.price_level}
          rating={restaurant.rating}
          address={restaurant.vicinity}
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

    backgroundColor: "#003",
    // backgroundColor: 'white',
    minWidth: "100%",
  },
  title: {
    marginLeft: 15,
    alignSelf: "flex-start",
    fontSize: 24,
    marginBottom: 20,
    color: "white",
  },
});

export default RestaurantList;
