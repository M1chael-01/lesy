/**
 * Saves or updates a user's profile including name, optional password, and car information.
 *
 * @param {Object} params - Input parameters for user update.
 * @param {string} params.name - The user's name.
 * @param {string} params.newPassword - The user's new password (optional).
 * @param {string} params.selectedPickedCar - A string representing the selected car (e.g., "volvo_SPZ123").
 * @param {string} params.foundedEditID - The ID of the user being edited.
 * @returns {Promise<{ success: boolean, error?: string, detail?: string }>}
 */
export const saveUser = async ({
  name,
  newPassword,
  selectedPickedCar,
  foundedEditID,
}) => {
  if (!name) {
    return { success: false, error: "Please enter a name." };
  }

  // Extract car name and SPZ (license plate) from selectedPickedCar
  let carName = "";
  let carSPZ = "";

  if (selectedPickedCar) {
    const [rawCarName] = selectedPickedCar.split("?");
    const cleanedName = rawCarName?.trim() || "";

    if (cleanedName.includes("_")) {
      const [namePart, spzPart] = cleanedName.split("_");
      carName = namePart;
      carSPZ = spzPart;
    } else {
      carName = cleanedName;
      carSPZ = "";
    }
  }

  // Prepare car object and encode it for safe URL usage
  const editedCarObject = {
    label: carName,
    value: carSPZ,
  };

  const encodedCarObject = encodeURIComponent(JSON.stringify(editedCarObject));

  // Load API key from environment constants
  const Constants = await import("expo-constants").then((mod) => mod.default);
  const APICODE = encodeURIComponent(Constants.expoConfig.extra.API);

  // Compose request URL
  const url = `${Constants.expoConfig.extra.URL}rest-api/app?editOneUserInfo` +
    `&editedUserID=${encodeURIComponent(foundedEditID)}` +
    `&editedName=${encodeURIComponent(name)}` +
    `&editedPassword=${encodeURIComponent(newPassword || "")}` +
    `&editedCarObject=${encodedCarObject}` +
    `&APICODE=${APICODE}`;

  try {
    const response = await fetch(url);
    const rawText = await response.text();

    if (!response.ok) {
      return { success: false, error: "Server returned an error response." };
    }

    const data = JSON.parse(rawText);

    if (data.message === "User updated successfully") {
      return { success: true };
    }

    if (data.error === "This username already exists.") {
      return {
        success: false,
        error: `User "${name}" already exists. Please choose a different name.`,
      };
    }

    return {
      success: false,
      error: "The server responded, but something went wrong.",
    };
  } catch (err) {
    console.error("Error saving user:", err);
    return {
      success: false,
      error: "Failed to save user. Please try again.",
      detail: err.message,
    };
  }
};
