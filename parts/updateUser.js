/**
 * Updates a user's information (name, password, and optional car info) via API.
 *
 * @param {string} foundedEditID - The ID of the user to update.
 * @param {string} name - The new name of the user.
 * @param {string} carName - Optional car name.
 * @param {string} carSPZ - Optional car plate (SPZ).
 * @param {string} [password] - Optional new password.
 * @returns {Promise<{ success: boolean, error?: string, detail?: string }>} The result of the update operation.
 */
export const updateUser = async (foundedEditID, name, carName, carSPZ, password) => {
  // Dynamically import Constants to access environment variables
  const Constants = await import('expo-constants').then(mod => mod.default);
  const APICODE = encodeURIComponent(Constants.expoConfig.extra.API);

  // Basic validation
  if (!name || !foundedEditID) {
    console.warn("No valid name or edit ID provided. Skipping update.");
    return { success: false, error: "Missing name or user ID." };
  }

  // Format car object if both fields are provided
  let carObject = null;
  if (carName && carSPZ) {
    carObject = { label: `${carName} ? ${carSPZ}` };
  }

  // Prepare request payload
  const bodyData = {
    APICODE,
    editUserID: foundedEditID,
    editedName: name,
    editedPassword: password || null,
    editedCarObject: carObject ? JSON.stringify(carObject) : null,
  };

  try {
    const response = await fetch(`${Constants.expoConfig.extra.URL}rest-api/app/updateUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    const result = await response.json();

    // Check server response
    if (response.ok && result?.message === "User updated successfully") {
      return { success: true };
    } else {
      return {
        success: false,
        error: result?.error || "Server responded with an update failure.",
      };
    }
  } catch (err) {
    console.error("Update failed:", err);
    return {
      success: false,
      error: "An error occurred while communicating with the server.",
      detail: err.message,
    };
  }
};
