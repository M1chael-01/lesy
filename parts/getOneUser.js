import Constants from "expo-constants";

/**
 * Fetches a single user's details by ID and updates local state.
 *
 * @param {number|string} foundedEditID - The ID of the user to fetch.
 * @param {Function} setName - Function to set the user's name in state.
 * @param {Function} setEditCarUser - Function to set the user's car label in state.
 */
export const getOneUser = async (foundedEditID, setName, setEditCarUser) => {
  if (!foundedEditID || foundedEditID === 0) return;

  // Load API code securely from environment config
  const APICODE = encodeURIComponent(Constants.expoConfig.extra.API);

  // Construct API URL
  const url = `${Constants.expoConfig.extra.URL}rest-api/app?getOneUserInfo` +
              `&getUserID=${encodeURIComponent(foundedEditID)}` +
              `&APICODE=${APICODE}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error('Server returned error:', response.status);
      return;
    }

    const result = await response.json();
    console.log("User data received:", result);

    // Check if user name exists
    if (!result.name) {
      console.warn('User name missing in response.');
      setName('');
      setEditCarUser('Neznámé vozidlo');
      return;
    }

    setName(result.name);

    const carData = result.cars || '';

    try {
      const parsedCarData = JSON.parse(carData);

      if (parsedCarData && parsedCarData.label) {
        // Remove any extra query string and trim
        const carLabel = parsedCarData.label.split('?')[0].trim();
        setEditCarUser(carLabel);
      } else {
        setEditCarUser('Neznámé vozidlo');
      }
    } catch (parseErr) {
      console.error('Error parsing car data:', parseErr);
      setEditCarUser('Neplatný formát dat');
    }

  } catch (err) {
    console.error('Error fetching user data:', err);
  }
};
