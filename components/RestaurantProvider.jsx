// RestaurantContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import * as Location from "expo-location";

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [photo, setPhoto] = useState([]);

  const getLocationAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      throw new Error("Permission to access location was denied");
    }

    return Location.getCurrentPositionAsync({});
  };

  const fetchNearbyPlaces = async (location, radius, type, apiKey) => {
    const url = process.env.EXPO_PUBLIC_NEARBY_PLACES_URL;

    const params = {
      location: location,
      radius: radius,
      type: type,
      key: apiKey,
    };

    const queryString = Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");

    const apiUrl = `${url}?${queryString}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("NearbyPlacesError:", error);
      throw error; // Re-throw the error so that the calling code can handle it
    }
  };

  const fetchPhotoData = async (photoReference) => {
    try {
      const apiUrl = `https://maps.googleapis.com/maps/api/place/photo?maxheight=600&maxwidth=600&photoreference=${photoReference}&key=${process.env.EXPO_PUBLIC_API_KEY}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Error in fetchPhotoData: ${response.statusText}`);
      }

      const data = response;
      return data;
    } catch (error) {
      console.error("Error in fetchPhotoData:", error.message);
      throw error; // Re-throw the error to let the component handle it
    }
  };

  useEffect(() => {
    // Gather user location
    getLocationAsync()
      .then(setLocation)
      .catch((error) => setErrorMsg(error.message));

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
    // Gather nearby restaurants
    const fetchRestaurants = async () => {
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
    };
    fetchRestaurants();

    // Gather restaurant photos
    const fetchPhotos = async () => {
      try {
        const data = await fetchPhotoData(photoID);
        setPhoto(data);
      } catch (error) {
        console.error(error);
        // Handle error or throw it if necessary
      }
    };

    fetchPhotos();
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, location, photo }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantContext = () => useContext(RestaurantContext);
