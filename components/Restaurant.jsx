import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import ImageCarousel from "./ImageCarousel";
import star from "../assets/star.png";

const Restaurant = (props) => {

  return (
    <View style={styles.container}>
      <ImageCarousel photoID={props.photoID} style={styles.imageContainer} />
      <View style={styles.info}>
        <Text style={styles.name}>{props.name}</Text>

        <View style={styles.detailsContainer}>
          <Text>{props.rating}</Text>
          <Image source={star} style={styles.star} resizeMode="contain" />
          <Text>
            {props.price == 1
              ? "$"
              : props.price == 2
              ? "$$"
              : props.price == 3
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
    // marginTop: 1,
    marginBottom: 20,
    // padding: 10,
  },
  imageContainer: {
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "gray",
    height: "50%",
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
    // fontStyle: 'bold',
    fontWeight: "bold",
  },
  star: {
    // height: 100
  },
});

export default Restaurant;
