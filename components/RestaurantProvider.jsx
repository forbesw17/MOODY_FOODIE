import React, { createContext, useContext, useEffect, useState } from "react";

// API Services
import { getLocationAsync } from "../server/LocationService";
import { getNearbyPlaces } from "../server/NearbyPlacesService";

const RestaurantContext = createContext(null);

export default RestaurantProvider = ({ children }) => {

  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {

    const fetchData = async () => {

      try {
        // Get user location (longitude, latitude)
        console.log("Searching for coords");
        const userLocation = await getLocationAsync();
  
        console.log("Location confirmed", userLocation);
  
        if (userLocation !== null) {
          // Get Nearby Places
          console.log("Searching for places");
          const nearbyPlaces = await getNearbyPlaces(userLocation.latitude, userLocation.longitude);

          console.log('Found Places')
          setRestaurants(nearbyPlaces);
        }
      } catch (error) {
        console.error("Restaurant Provider error:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <RestaurantContext.Provider value={restaurants}>
      {children}
    </RestaurantContext.Provider>
  );
};

export function useRestaurantContext() {
  const data = useContext(RestaurantContext);
  return data;
}
