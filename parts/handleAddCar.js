import { Alert } from "react-native";
import Constants from "expo-constants";

/**
 * Adds a new car to the system via API.
 *
 * @param {string} name - The name/label of the car.
 * @param {string} spz - The car's license plate number (SPZ).
 * @param {Function} setCarOptions - Function to update the available car options in the UI.
 * @returns {Promise<boolean>} - Returns true if successful, false otherwise.
 */
export const handleAddCar = async (name, spz, setCarOptions) => {
  // Validate required input fields
  if (!name || !spz) {
    Alert.alert("Chyba", "Vyplňte povinné údaje");
    return false;
  }

  // Get the API code from environment config
  const APICODE = encodeURIComponent(Constants.expoConfig.extra.API);

  // Construct the request URL
  const url =
    `${Constants.expoConfig.extra.URL}rest-api/app?addCar` +
    `&name=${encodeURIComponent(name)}` +
    `&spz=${encodeURIComponent(spz)}` +
    `&APICODE=${APICODE}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.success) {
      Alert.alert("Hotovo", "Auto bylo přidáno.");
      
      // Refresh car list
      const updatedCars = await selectCars();
      setCarOptions(updatedCars);

      return true;
    } else {
      Alert.alert("Chyba", data.error || "Neznámá chyba.");
      return false;
    }
  } catch (err) {
    console.error("Error adding car:", err);
    Alert.alert("Chyba", "Došlo k chybě při přidávání auta.");
    return false;
  }
};
