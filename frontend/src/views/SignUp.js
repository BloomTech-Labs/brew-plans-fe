import React from 'react';
import { View, Text, Button } from 'react-native';
import Layout from '../components/Layout/Layout';
import SignUpForm from '../components/UserForms/SignUpForm';

const SignUp = props => {
  return (
    <Layout>
      <SignUpForm />
    </Layout>
  );
};

export default SignUp;
