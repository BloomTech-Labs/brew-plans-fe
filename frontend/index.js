import React from 'react'
import { Provider } from 'react-redux';
import App from './App.js';
import configureStore from './src/store/configureStore.js';
import { registerRootComponent } from 'expo';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

// Register the app container
registerRootComponent(RNRedux);