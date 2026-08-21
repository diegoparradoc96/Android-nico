/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';
/* context */
import { GlobalProvider } from './src/context';
/* navigation */
import { Navigation } from './src/navigation/Navigation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GlobalProvider >
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <SafeAreaView style={{ flex: 1 }}>
          <Navigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </GlobalProvider>
  );
}



export default App;
