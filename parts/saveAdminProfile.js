/**
 * Updates the admin profile information (name and optional password).
 *
 * @param {Object} params - Parameters for updating the admin profile.
 * @param {string} params.name - New admin name.
 * @param {string} [params.newPassword] - Optional new password for the admin.
 * @param {string} [params.currentAdminName="pepa"] - Current admin username (default: "pepa").
 * @returns {Promise<{ success: boolean, message?: string, error?: string, detail?: string }>}
 */
export const saveAdminProfile = async ({ name, newPassword, currentAdminName = "pepa" }) => {
  if (!name.trim()) {
    return { success: false, error: "Name cannot be empty." };
  }

  try {
    // Dynamically import environment constants
    const Constants = await import('expo-constants').then(mod => mod.default);
    const APICODE = encodeURIComponent(Constants.expoConfig.extra.API);

    // Safely encode URL parameters
    const encodedName = encodeURIComponent(name.trim());
    const encodedPassword = encodeURIComponent(newPassword || "");
    const encodedCurrentAdmin = encodeURIComponent(currentAdminName);

    
    const url = `${Constants.expoConfig.extra.URL}app?editAdmin&newAdminName=${encodedName}&adminPassword=${encodedPassword}&currentAdminName=${encodedCurrentAdmin}&APICODE=${APICODE}`;
    console.log("Sending request to:", url);

    const response = await fetch(url);

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! Status: ${response.status}`
      };
    }

    const jsonResponse = await response.json();
    console.log("API Response:", jsonResponse);

    if (jsonResponse.status === "success") {
      return {
        success: true,
        message: jsonResponse.message || "Profile updated successfully."
      };
    } else {
      return {
        success: false,
        error: jsonResponse.message || "Failed to update profile."
      };
    }

  } catch (err) {
    console.error("Error during API request:", err);
    return {
      success: false,
      error: "An error occurred while communicating with the server. Please try again.",
      detail: err.message
    };
  }
};
