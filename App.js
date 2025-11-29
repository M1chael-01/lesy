// Enable support for React Server Components (RSC) in Expo
import 'expo/virtual/rsc';

// Imports required for React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import individual screen components
import LoginScreen from './LoginScreen.js'; 
import HomeScreen from './HomeScreen.js';   

// Create a Stack Navigator instance
const Stack = createStackNavigator();

// Main application component
export default function App() {
  return (
    // NavigationContainer provides navigation context for the app
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        {/* Login screen – header (top bar) is hidden */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />

        {/* Home screen – header is also hidden */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
