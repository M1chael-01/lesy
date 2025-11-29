import { Alert } from "react-native";

/**
 * Updates an existing car's label and value in the backend.
 *
 * @param {Object} params - The function parameters.
 * @param {Object} params.editingCar - The currently selected car being edited.
 * @param {string} params.newLabel - The new label for the car.
 * @param {string} params.newValue - The new value (typically the license plate).
 * @param {Function} params.setCarOptions - State setter to update the car list in UI.
 * @param {Function} params.setEditCar - State setter to exit the edit mode.
 */
export const updateEditedCar = async ({
  editingCar,
  newLabel,
  newValue,
  setCarOptions,
  setEditCar,
}) => {
  // Dynamically import Constants to retrieve API key
  const Constants = await import('expo-constants').then(mod => mod.default);
  const APICODE = encodeURIComponent(Constants.expoConfig.extra.API);

  // Validate input
  if (!editingCar || !newLabel || !newValue) {
    Alert.alert("Error", "Please fill in all fields.");
    return;
  }

  const oldValue = editingCar.value.trim();

  const newCar = {
    label: `${newLabel.trim()} ? SPZ ${newValue.trim().toUpperCase()}`,
    value: `${newLabel.trim().toLowerCase()}_${newValue.trim().toUpperCase()}`,
  };

  // Prepare request URL
  const url = `${Constants.expoConfig.extra.URL}rest-api/app?editOneCar&APICODE=${APICODE}&editCarInfo=${encodeURIComponent(
    JSON.stringify({ oldValue, newCar })
  )}`;

  try {
    const response = await fetch(url);
    const rawData = await response.text(); // handle possible non-JSON responses
    console.log("Raw response data:", rawData);

    const parsedData = JSON.parse(rawData);

    if (parsedData.success) {
      Alert.alert("Success", "Car was successfully updated.");

      // Update local car list
      setCarOptions((prevOptions) =>
        prevOptions.map((car) =>
          car.value === oldValue ? newCar : car
        )
      );

      setEditCar(false);
    } else {
      Alert.alert("Error", "Car update failed. Please try again.");
    }
  } catch (error) {
    console.error("Error updating car:", error);
    Alert.alert("Error", "Failed to connect to the server.");
  }
};
