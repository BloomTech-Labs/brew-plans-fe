import React from 'react';
import Layout from './src/components/Layout/Layout';
import DisplaySeededRecipes from './src/components/TestToDisplayData/DisplaySeededRecipes.js';
import DisplayUserRecipes from './src/components/TestToDisplayData/DisplayUserRecipes.js';
import DisplayUserData from './src/components/TestToDisplayData/DisplayUserData.js';
import SignUpForm from './src/components/UserForms/SignUpForm.js';
import { Text } from 'react-native-paper';

const App = () => {
  return (
    <Layout>
      <DisplayUserData/>
    </Layout>
  );
};

export default App;