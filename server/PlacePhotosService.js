
import axios from "axios";

export const getPlacePhoto = async (photoReference) => {

  try {
    const response = await axios.get(
      `https://places.googleapis.com/v1/${photoReference}/media?key=${process.env.EXPO_PUBLIC_GOOGLE_PLACES_API_KEY}&maxHeightPx=500&maxWidthPx=500`,
      {
        responseType: "arraybuffer", // Explicitly set response type to string
      }
    );

    return response.config.url
    
  } catch (error) {
    console.log("error", error);
    throw error; // rethrow the error to be caught by the calling function
  }
};
