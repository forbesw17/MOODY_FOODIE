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
    <View style={globalStyles.restaurant.container}>

      <View style={globalStyles.restaurant.imageContainer}> 
        {photo !== '' ? <Image style={globalStyles.restaurant.image} source={{ uri: photo }} /> : <Image style={globalStyles.restaurant.image} source={NoPhoto} /> }
      </View>

      <View style={globalStyles.restaurant.info}>
        <Text style={globalStyles.restaurant.name}>{props.name}</Text>

        <View style={globalStyles.restaurant.detailsContainer}>
          <Text style={globalStyles.restaurant.text}>{props.rating}</Text>
          <Image source={ratingStar} style={globalStyles.restaurant.star} resizeMode="contain" />
          <Text style={globalStyles.restaurant.text}>
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

        <Text style={globalStyles.restaurant.text}>{props.address}</Text>
      </View>
    </View>
  );
};


export default Restaurant;
