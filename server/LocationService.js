// LocationService.js
import * as Location from "expo-location";

export const getLocationAsync = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  
    if (status !== "granted") {
      throw new Error("Permission to access location was denied");
    }

    response = (await Location.getCurrentPositionAsync({})).coords;

    
    const coords = {
      latitude: response.latitude,
      longitude: response.longitude
    }
    
    return coords;
};