
export const fetchNearbyPlaces = async (location, radius, type, apiKey) => {
  
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
