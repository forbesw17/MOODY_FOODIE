
import axios from "axios";

export const getNearbyPlaces = async (latitude, longitude) => {
  try {
    const response = await axios.post(
      "https://places.googleapis.com/v1/places:searchNearby",
      {
        includedTypes: ["restaurant"],
        maxResultCount: 20,
        locationRestriction: {
          circle: {
            center: {
              latitude: latitude,
              longitude: longitude,
            },
            radius: 1500.0,
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": process.env.EXPO_PUBLIC_GOOGLE_PLACES_API_KEY,
          "X-Goog-FieldMask":
            "places.displayName,places.shortFormattedAddress,places.photos,places.priceLevel,places.rating,places.googleMapsUri",
        },
      }
    );

    return response.data.places;

  } catch (error) {
    console.log("error", error);
    throw error; // rethrow the error to be caught by the calling function
  }
};
