import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

import { getPlacePhoto } from "../server/PlacePhotosService";

// import star from "../assets/star.png";
import ratingStar from '../assets/ratingStar.png';

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
  }, [props.photo]); 

  if (photo === '') {
    return;
  }

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}> 
        <Image style={styles.image} source={{ uri: photo }} />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{props.name}</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.text}>{props.rating}</Text>
          <Image source={ratingStar} style={styles.star} resizeMode="contain" />
          <Text style={styles.text}>
            {props.price == "PRICE_LEVEL_INEXPENSIVE"
              ? "   $"
              : props.price == "PRICE_LEVEL_MODERATE"
              ? "   $$"
              : props.price == "PRICE_LEVEL_EXPENSIVE"
              ? "   $$$"
              : "   $$$$"}
          </Text>
        </View>

        <Text style={styles.text}>{props.address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "90%",
    backgroundColor: globalStyles.app.restaurant.backgroundColor,

    flexDirection: 'column',
    
    borderRadius: 15,
    marginBottom: 20,
  },
  imageContainer: {
    height: '65%',
  },

  image: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  info: {
    padding: 10,
    marginLeft: 5,
  },

  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: globalStyles.app.restaurant.color
  },

  text: {
    color: globalStyles.app.restaurant.color
  },
  star: {
    height: 10,
    width: 10
  },
});

export default Restaurant;
