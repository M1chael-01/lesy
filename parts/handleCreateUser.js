import { Alert } from "react-native";
import Constants from "expo-constants";

/**
 * Creates a new user by sending a request to the API endpoint.
 *
 * @param {string} newUserName - The new user's username.
 * @param {string} newUserPassword - The new user's password.
 * @param {string} addedUserCar - The car string in format "label_value" (optional).
 * @param {Function} loadUsers - Optional function to reload users after creation.
 */
export const handleCreateUser = async (
  newUserName,
  newUserPassword,
  addedUserCar,
  loadUsers
) => {
  // Validate required inputs
  if (!newUserName || !newUserPassword) {
    Alert.alert("❌ Vyplňte uživatelské jméno a heslo.");
    return;
  }

  // Load config values
  const user = Constants.expoConfig.extra.USER;
  const numeric = Constants.easConfig.extra.CREATE_NUMERIC_CODE;
  const code = Constants.easConfig.extra.CODE;
  const APICODE = encodeURIComponent(Constants.expoConfig.extra.API);

  // Parse car information if provided
  let carData = {};
  const trimmedCar = addedUserCar.trim();

  if (trimmedCar !== "") {
    const carParts = trimmedCar.split("_");
    if (carParts.length >= 2) {
      carData = {
        label: carParts[0],
        value: carParts[1],
      };
    }
  }

  const encodedCar = encodeURIComponent(JSON.stringify(carData));

  // Construct the request URL
  const endpointUrl = `${Constants.expoConfig.extra.URL}rest-api/app?createUser&username=${encodeURIComponent(
    newUserName
  )}&password=${encodeURIComponent(
    newUserPassword
  )}&code=${encodeURIComponent(code)}&user=${encodeURIComponent(
    user
  )}&numeric=${encodeURIComponent(numeric)}&car=${encodedCar}&APICODE=${APICODE}`;

  try {
    const response = await fetch(endpointUrl);
    const rawText = await response.text();

    console.log("Raw response:", rawText);

    const isJson =
      response.headers.get("Content-Type")?.includes("application/json");

    if (isJson) {
      const data = JSON.parse(rawText);

      if (data.message === "User successfully created in the database") {
        Alert.alert("✅ Uživatel byl vytvořen.");
        if (typeof loadUsers === "function") {
          await loadUsers();
        }
      } else if (data.msg?.includes("already exists")) {
        Alert.alert(`⚠️ Uživatel s jménem ${newUserName} již existuje.`);
      } else {
        Alert.alert("⚠️ Něco se pokazilo, zkuste to znovu.");
      }
    } else {
      Alert.alert("⚠️ Server vrátil neplatnou odpověď.");
    }
  } catch (error) {
    console.error("Error while creating user:", error);
    Alert.alert("❌ Nelze se připojit k serveru.");
  }
};
