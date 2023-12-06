import React, { useContext, useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { getPlacePhoto } from "../server/PlacePhotosService";

import { useRestaurantContext } from "./RestaurantProvider";

const ImageCarousel = ({ restaurantIndex }) => {

  const restaurants = useRestaurantContext();
  const [placePhotosReferences, setPlacePhotosReferences] = useState([]);
  const [placePhotosURI, setPlacePhotosURI] = useState();
  
  useEffect(() => {

    setPlacePhotosReferences(restaurants[restaurantIndex].photos);

    const fetchData = async () => {
      try {

        console.log("Searching for Photos");


        const resolvedPhotos = await Promise.all(
          placePhotosReferences.map(async (photoID, index) => {
            const photo = await getPlacePhoto(photoID.name);
            return photo;
          })
        );
    
        setPlacePhotosURI((prev) => [...prev, ...resolvedPhotos]);

        console.log(placePhotosURI);

        // // Use Promise.all to wait for all async operations
        // const photoPromises = placePhotosReferences.map(async (photoID, index) => {
        //   // return await getPlacePhoto(photoID.name);
        //   return getPlacePhoto(photoID.name);
        // });

        // // const resolvedPhotos = await Promise.all(photoPromises);
        // setPlacePhotosURI(photoPromises);
        // // console.log(placePhotosURI);
      } catch (error) {
        console.error("Image Carousel Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide}>
        {/* {console.log(placePhotosURI)} */}
        {/* {placePhotosURI.map((photoURI, index) => (
          <Image source={{ uri: photoURI }} style={styles.image} />
        ))} */}
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // color: 'white'
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    color: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default ImageCarousel;
