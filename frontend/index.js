import React from 'react'
import { Provider } from 'react-redux';
import App from './App.js';
import configureStore from './src/store/configureStore.js';
import { registerRootComponent } from 'expo';
import { StatusBar, View } from 'react-native'

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <App />
    </View>
  </Provider>
)

// Register the app container
registerRootComponent(RNRedux);