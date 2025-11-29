/**
 * Fetches a list of places from the backend API.
 * 
 * Uses environment variables defined in `expo-constants` for authentication.
 * Returns an array of place objects if successful, or an empty array on failure.
 *
 * @returns {Promise<Array>} An array of place data, or an empty array if fetch fails or data is invalid.
 */
export const selectPlaces = async () => {
  // Dynamically import Constants to ensure it's only loaded in supported environments
  const Constants = await import('expo-constants').then(mod => mod.default);

  const code = Constants.expoConfig.extra.CODE;
  const apiCode = encodeURIComponent(Constants.expoConfig.extra.API);

  
  const url = `${Constants.expoConfig.extra.URL}rest-api/app?select_places&code=${code}&APICODE=${apiCode}`;
  try {
    const response = await fetch(url);
    const result = await response.json();

    // Validate response structure
    if (Array.isArray(result.data)) {
      return result.data;
    } else {
      console.error('Unexpected data format from API:', result);
      return [];
    }
  } catch (error) {
    console.error('Failed to fetch places:', error);
    return [];
  }
};
