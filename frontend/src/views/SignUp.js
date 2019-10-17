import React from 'react';
import { View, Text, Button } from 'react-native';
import Layout from '../components/Layout/Layout';
import SignUpForm from '../components/UserForms/SignUpForm';

const SignUp = props => {
  // console.log('signup view: ', props)
  return (
    <Layout>
      <SignUpForm navigate={props.navigation.navigate}/>
    </Layout>
  );
};

export default SignUp;
