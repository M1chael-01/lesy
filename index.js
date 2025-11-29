// Import the function to register the main component of the app in the Expo environment
import { registerRootComponent } from 'expo';

// Import the main application component
import App from './App';

/**
 * Registers the main application component using `registerRootComponent`.
 *
 * This function ensures:
 * - The `App` component is set as the root component of the application.
 * - Proper configuration of the runtime environment for both:
 *   - Expo Go (for development and preview),
 *   - Bare workflow builds (custom native builds outside of Expo Go).
 *
 * Using `registerRootComponent` is the recommended way to initialize the root
 * component in projects built with Expo, as it handles environment setup automatically.
 */
registerRootComponent(App);
