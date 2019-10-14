import React from 'react';
import { View, Text } from 'react-native';
import Layout from './src/components/Layout/Layout';
import SignUpForm from './src/components/UserForms/SignUpForm';

const App = () => {
  return (
    <Layout>
      <SignUpForm />
    </Layout>
  );
};

export default App;
