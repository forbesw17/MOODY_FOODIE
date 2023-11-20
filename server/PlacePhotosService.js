
export const fetchPhotoData = async (photoReference) => {
  
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
