import React, { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

// API Services
import { getLocationAsync } from "../server/LocationService";
import { getNearbyPlaces } from "../server/NearbyPlacesService";

const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userLocation = await getLocationAsync();

        // Get Nearby Places
        const nearbyPlaces = await getNearbyPlaces(
          userLocation.latitude,
          userLocation.longitude
        );

        setRestaurants(nearbyPlaces);
        setIsLoading(false);
      } catch (error) {
        console.error("Restaurant Provider error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <RestaurantContext.Provider value={restaurants}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#5A4AE3" />
      ) : (
        children
      )}
    </RestaurantContext.Provider>
  );
};

export function useRestaurantContext() {
  const data = useContext(RestaurantContext);

  if (data === undefined) {
    throw new Error(
      "useRestaurantContext must be used within a RestaurantProvider"
    );
  }

  return data;
}

export default RestaurantProvider;
