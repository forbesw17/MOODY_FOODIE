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
        const userLocation = await getLocationAsync();
    
        if (userLocation !== null) {
          // Get Nearby Places
          const nearbyPlaces = await getNearbyPlaces(userLocation.latitude, userLocation.longitude);
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
