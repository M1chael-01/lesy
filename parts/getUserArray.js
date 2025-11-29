import Constants from "expo-constants";

/**
 * Fetches the user array from the remote API.
 *
 * @returns {Promise<{ success: boolean, data?: any, error?: string, raw?: any, detail?: string }>}
 */
export const getUserArray = async () => {
  // Safely read API config values
  const adminKey = encodeURIComponent(Constants.expoConfig.extra.ADMIN_KEY || "");
  const selectKey = encodeURIComponent(Constants.expoConfig.extra.SELECT_KEY || "");
  const code = encodeURIComponent(Constants.expoConfig.extra.CODE || "");
  const APICODE = encodeURIComponent(Constants.expoConfig.extra.API || "");

  // Construct API request URL
  const url = `${Constants.expoConfig.extra.URL}rest-api/app?catchData` +
              `&admin=${adminKey}` +
              `&select=${selectKey}` +
              `&code=${code}` +
              `&APICODE=${APICODE}`;

  try {
    const response = await fetch(url);
    const result = await response.json();

    // Return data if available
    if (result.data) {
      return { success: true, data: result.data };
    } else {
      return {
        success: false,
        error: "Žádná data nebyla nalezena.",
        raw: result
      };
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      success: false,
      error: "Chyba při načítání dat.",
      detail: error.message
    };
  }
};
