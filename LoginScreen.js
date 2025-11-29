// React and React Native hooks & components
import { useState, useEffect, useRef } from 'react';
import {
  styles,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Alert,
} from 'react-native';

// Third-party libraries
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import Constants from 'expo-constants';

import { login } from './parts/other/colors';

// Base API URL loaded from Expo config
const URL = Constants.expoConfig.extra.URL;

/**
 * LoginScreen component
 * - Handles user login, credential storage, admin setup, and connectivity checks
 * - Provides fallback UI if errors occur
 */
const LoginScreen = ({ navigation }) => {
  // Form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState(Constants.expoConfig.extra.CODE); // Application-specific code
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showAdminLink, setShowAdminLink] = useState(false);

  // Keep track of initial values to detect changes later
  const initialUsernameRef = useRef('');
  const initialPasswordRef = useRef('');

  /**
   * Toggle password field visibility
   */
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  /**
   * Handles user login logic
   * 
   * Sends a GET request to the backend API with the following query params:
   * @param {string} APICODE - Secret API key (from config)
   * @param {string} code - App-specific authentication code
   * @param {string} username - Entered by user
   * @param {string} password - Entered by user
   */
  const handleLogin = async () => {
    const api = encodeURIComponent(Constants.expoConfig.extra.API);
    const apiUrl = `${URL}rest-api/app?APICODE=${api}&login&code=${code}&username=${username}&password=${password}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok && data.message === 'Login successful') {
        // Save credentials and role for persistence
        await AsyncStorage.setItem('username', data.name);
        await AsyncStorage.setItem('password', password);
        await AsyncStorage.setItem('role', data.role);

        // Redirect user to Home screen with their role
        navigation.navigate('Home', {
          role: data.role,
          userName: data.name,
        });
      } else if (data.error) {
        // Show proper error message based on API response
        switch (data.error) {
          case 'Incorrect password':
            setErrorMessage('Nesprávné uživatelské jméno nebo heslo.');
            break;
          case 'Missing username or password':
            setErrorMessage('Chybí uživatelské jméno nebo heslo.');
            break;
          case 'No user found':
            setErrorMessage('Uživatel nebyl nalezen.');
            break;
          case 'Invalid code':
            setErrorMessage('Něco se stalo,kontaktujte podporu');
            break;
          default:
            setErrorMessage('Něco se stalo,kontaktujte podporu');
        }
      }
    } catch (err) {
      setErrorMessage('Přihlášení se nezdařilo. Zkuste to prosím znovu.');
    }
  };

  /**
   * Loads previously saved login credentials from AsyncStorage on first render
   * Also clears them if user modifies input fields
   */
  useEffect(() => {
    const fillForm = async () => {
      try {
        const savedUsername = await AsyncStorage.getItem('username');
        const savedPassword = await AsyncStorage.getItem('password');

        if (savedUsername && savedPassword) {
          initialUsernameRef.current = savedUsername;
          initialPasswordRef.current = savedPassword;
          setUsername(savedUsername);
          setPassword(savedPassword);
        }
      } catch (err) {
        // Silent fail (can log if needed)
      }
    };

    fillForm();

    // Cleanup: remove stored credentials if user changed them
    return () => {
      const usernameChanged = username !== initialUsernameRef.current;
      const passwordChanged = password !== initialPasswordRef.current;

      if (usernameChanged || passwordChanged) {
        AsyncStorage.removeItem('username');
        AsyncStorage.removeItem('password');
      }
    };
  }, []);

  /**
   * Checks whether an admin account already exists.
   * If not, shows a link to allow admin creation.
   */
  useEffect(() => {
    const checkAdminExistence = async () => {
      const url = `${URL}rest-api/app?adminExist&code=${code}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setShowAdminLink(data.message === 'admin-exist-false');
      } catch (err) {
        setErrorMessage('Error checking admin status: ' + err.message);
      }
    };

    checkAdminExistence();
  }, [code]);

  /**
   * Creates an admin account using preset credentials
   * Only available when no admin exists in the database
   *
   * API query parameters:
   * @param {string} aDDm1Ncode - Secret admin creation code
   * @param {string} aDDm1Nuse33 - Default admin username
   * @param {string} code - App instance identifier
   */
  const generateAdmin = async () => {
    const adminCode = Constants.expoConfig.extra.ADMIN_CODE;
    const user = Constants.expoConfig.extra.USER;
    const endPoint = `${URL}rest-api/app?createAdmin&aDDm1Ncode=${adminCode}&aDDm1Nuse33=${user}&code=${code}`;

    try {
      const response = await fetch(endPoint);
      const data = await response.json();

      if (data.message === 'Admin successfully created in the database') {
        // Logic seems reversed – verify with backend response structure
        alert('Error!\n\nAdmin creation failed.');
        setShowAdminLink(false);
      } else {
        alert(
          'There was a problem creating the admin account.\n\nPlease try again or contact support.'
        );
      }
    } catch (err) {
      setErrorMessage('Error creating admin account: ' + err.message);
    }
  };

  /**
   * Monitors internet connection every second.
   * If disconnected, shows an alert.
   */
  useEffect(() => {
    let intervalId;
    let alertShown = false;

    const checkConnection = async () => {
      const state = await NetInfo.fetch();
      if (!state.isConnected && !alertShown) {
        alertShown = true;
        Alert.alert(
          'Offline',
          'This app requires an internet connection.',
          [{ text: 'OK', onPress: () => (alertShown = false) }]
        );
      }
    };

    intervalId = setInterval(checkConnection, 1000);
    return () => clearInterval(intervalId);
  }, []);

  /**
   * UI Layout
   */
  return (
    <ImageBackground
      source={require('./assets/home/mobileApp.jpg')}
      style={login.background}
      resizeMode="cover"
    >
      <View style={login.container}>
          <Text style={login.header}>Vítejte zpět</Text>

        {errorMessage ? <Text style={login.errorText}>{errorMessage}</Text> : null}

        {/* Username input */}
        <TextInput
        style={login.input}
        placeholder="Uživatelské jméno"
        placeholderTextColor="#666"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        returnKeyType="next"
        />

        {/* Password input with toggle */}
        <View style={login.passwordContainer}>
          <TextInput
            style={login.passwordInput}
            placeholder="Heslo"
            placeholderTextColor="#666"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            accessibilityLabel={showPassword ? 'Skrýt heslo' : 'Zobrazit heslo'}
          >
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="#444"
            />
          </TouchableOpacity>
        </View>

        {/* Login button */}
        <TouchableOpacity
          style={login.button}
          onPress={handleLogin}
          accessibilityRole="button"
        >
          <Text style={login.buttonText}>Přihlásit se</Text>
        </TouchableOpacity>

        {/* Admin setup link (shown only when needed) */}
        {showAdminLink && (
          <TouchableOpacity onPress={generateAdmin} accessibilityRole="link">
           <Text style={login.adminLink}>Jsem tu poprvé (admin)</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

// Export component
export default LoginScreen;
