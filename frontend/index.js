import React from 'react'
import { Provider } from 'react-redux';
import App from './App.js';
import configureStore from './src/store/configureStore.js';
import { registerRootComponent } from 'expo';
import { StatusBar, View } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

const store = configureStore();

const RNRedux = () => (
 // <SafeAreaProvider>
  <Provider store={store}>
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <App />
    </View>
  </Provider>
 // </SafeAreaProvider>
)

// Register the app container
registerRootComponent(RNRedux);