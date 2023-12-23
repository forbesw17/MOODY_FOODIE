import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

// API Services
import { getPlacePhoto } from "../server/PlacePhotosService";

// Assets
import ratingStar from '../assets/ratingStar.png';
import NoPhoto from '../assets/NoPhotoAvailable.jpg';

const Restaurant = (props) => {

  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {

        const photoURL = await getPlacePhoto(props.photo);
        
        setPhoto(photoURL);

      } catch (error) {
        setPhoto('');
      }
    };

    fetchData();
  }, [props.photo]); // Only re-run the effect if props.photo changes

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}> 
        {photo !== '' ? <Image style={styles.image} source={{ uri: photo }} /> : <Image style={styles.image} source={NoPhoto} /> }
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
              : props.price == "PRICE_LEVEL_VERY_EXPENSIVE"
              ? "   $$$$"
              : ""
            }
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
    borderTopRightRadius: 15,
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
