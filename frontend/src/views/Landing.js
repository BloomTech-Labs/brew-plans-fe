import React from 'react';
import {Text} from "react-native"
import Layout from '../components/Layout/Layout';
import LandingButton from '../components/Landing/LandingButton';
import Timer from "../components/timer"

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