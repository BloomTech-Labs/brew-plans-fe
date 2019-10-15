import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import configureStore from './src/store/configureStore.js';

const store = configureStore();

export default function App() {
  return (
      <View style={styles.container}>
        <Text>App is working.</Text>
      </View>
  );
}

const reactNativeRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    username: state.user.username,
    password: state.user.password,
    email: state.user.email
  }
};

export default connect()(reactNativeRedux);