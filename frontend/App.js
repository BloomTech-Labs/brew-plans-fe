import React from 'react';
import Layout from './src/components/Layout/Layout';
import SignUpForm from './src/components/UserForms/SignUpForm';
import { Text } from 'react-native-paper';

const App = () => {
  return (
    <Layout>
      <Text>Home Page</Text>
      <SignUpForm />
    </Layout>
  );
};

export default App;