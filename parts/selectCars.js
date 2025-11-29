/**
 * Fetches car options from the backend API.
 * 
 * The server responds with JavaScript code as a string, which is executed safely
 * to retrieve the car options array.
 *
 * @returns {Promise<Array>} Array of car option objects, or an empty array if fetching fails.
 */
export const selectCars = async () => {
  try {
    // Dynamically import environment constants
    const Constants = await import('expo-constants').then(mod => mod.default);
    const code = Constants.expoConfig.extra.CODE;
    const APICODE = encodeURIComponent(Constants.expoConfig.extra.API);

    
    const url = `${Constants.expoConfig.extra.URL}rest-api/app?selectCars&code=${code}&APICODE=${APICODE}`;
    const response = await fetch(url);
    const result = await response.json();

    if (result?.msg?.[0]) {
      const jsCode = result.msg[0];

      // Use Function constructor to parse returned JS code (assumed to declare `carOptions`)
      let parsedOptions;
      try {
        const extractCars = new Function(`"use strict"; const carOptions = ${jsCode}; return carOptions;`);
        parsedOptions = extractCars();
      } catch (parseError) {
        console.error("Failed to parse carOptions from server response:", parseError);
        return [];
      }

      return Array.isArray(parsedOptions) ? parsedOptions : [];
    } else {
      console.warn("No car options found in the response.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching car options:", error);
    return [];
  }
};
