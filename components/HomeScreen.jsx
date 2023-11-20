import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";

import { getLocationAsync } from "../server/LocationService";

import FeedHeader from "./FeedHeader";
import RestaurantList from "./RestaurantList";

const HomeScreen = () => {
  // const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {

    getLocationAsync()
      .then(setLocation)
      .catch((error) => setErrorMsg(error.message));

  }, []);

  let text = "";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  // Update this part to check if 'text' is valid JSON before parsing
  let parsedData;
  try {
    parsedData = JSON.parse(text);
  } catch (error) {
    // Handle the error, or you can set parsedData to a default value
    parsedData = { coords: { latitude: 0, longitude: 0 } };
  }

  const latitude = parsedData.coords.latitude;
  const longitude = parsedData.coords.longitude;

  return (
    <View style={styles.container}>
      <FeedHeader />

      <RestaurantList latitude={latitude} longitude={longitude}/>

      {/* <FeedNavigation /> */}
    </View>
  );
};

// STYLES FOR HOME SCREEN
const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: 'center',
    backgroundColor: "#003",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
  },
});

export default HomeScreen;
