import React from 'react';
import { View, Text, Button } from 'react-native';
import Layout from '../components/Layout/Layout';
import LoginForm from '../components/UserForms/LoginForm';

const SignUp = props => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default SignUp;
