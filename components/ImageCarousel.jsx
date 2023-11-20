import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { fetchPhotoData } from "../server/PlacePhotosService";

const ImageCarousel = ({ photoID }) => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPhotoData(photoID);
        setPhoto(data);
      } catch (error) {
        console.error(error);
        // Handle error or throw it if necessary
      }
    };

    fetchData();
  }, []);

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
    >
      <View style={styles.slide}>
        <Image source={{ uri: photo.url }} style={styles.image} />
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
