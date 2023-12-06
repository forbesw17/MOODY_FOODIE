import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { getPlacePhoto } from "../server/PlacePhotosService";

import star from "../assets/star.png";

const Restaurant = (props) => {

  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {

        const photoURL = await getPlacePhoto(props.photo);
        
        setPhoto(photoURL);

      } catch (error) {
        console.error("Image Error:", error);
      }
    };

    fetchData();
  }, []);

  if (photo === '') {
    return;
  }

  return (
    <View style={styles.container}>

      <Image style={styles.image} source={{ uri: photo }} />

      <View style={styles.info}>
        <Text style={styles.name}>{props.name}</Text>

        <View style={styles.detailsContainer}>
          <Text>{props.rating}</Text>
          <Image source={star} style={styles.star} resizeMode="contain" />
          <Text>
            {props.price == "PRICE_LEVEL_INEXPENSIVE"
              ? "$"
              : props.price == "PRICE_LEVEL_MODERATE"
              ? "$$"
              : props.price == "PRICE_LEVEL_EXPENSIVE"
              ? "$$$"
              : "$$$$"}
          </Text>
        </View>

        <Text>{props.address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "90%",
    backgroundColor: "white",

    borderRadius: 15,
    marginBottom: 20,
  },
  imageContainer: {
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "gray",
    height: "50%",
  },

  image: {
    // width: "100%",
    // height: "70%",

    height: 200,
    width: '100%',

    // resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  info: {
    padding: 15
  },

  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  star: {

  },
});

export default Restaurant;
