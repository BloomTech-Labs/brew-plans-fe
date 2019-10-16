import React from 'react';
// import { Text, Button, withTheme } from 'react-native-paper';
import Layout from '../components/Layout/Layout';
import LandingButton from '../components/Landing/LandingButton';

const Landing = props => {
  return (
    <Layout>
      <LandingButton
        title='Sign Up'
        onPress={() => props.navigation.navigate('SignUp')}
      />
      <LandingButton
        title='Login'
        onPress={() => props.navigation.navigate('Login')}
      />
    </Layout>
  );
};

export default Landing;
