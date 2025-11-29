import Constants from "expo-constants";

/**
 * Checks API access by sending a verification request.
 *
 * @returns {Promise<boolean>} - Returns true if access is granted, false otherwise.
 */
export const checkAccess = async () => {
  // Read access credentials from environment config
  const codeAPI = Constants.expoConfig.extra.CODE_API || "";
  const codeSecured = Constants.expoConfig.extra.CODE_SECURED || "";

  // Construct the request URL
  const url = `${Constants.expoConfig.extra.URL}api.php?access=1` +
              `&codeAPI=${encodeURIComponent(codeAPI)}` +
              `&codeSecured=${encodeURIComponent(codeSecured)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data?.error) {
      console.warn("❌ Přístup odepřen:", data.error);
      return false;
    }

    console.log("✅ Přístup povolen.");
    return true;

  } catch (error) {
    console.error("❗ Chyba sítě nebo serveru:", error);
    return false;
  }
};
