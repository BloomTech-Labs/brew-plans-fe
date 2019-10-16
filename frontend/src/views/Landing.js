import React from 'react';
import { View, Text, Button } from 'react-native';
import Layout from '../components/Layout/Layout';

const Landing = props => {
  return (
    <Layout>
      <Text>Landing Page</Text>
      <Button
        title='Sign Up'
        onPress={() => props.navigation.navigate('SignUp')}
      />
      <Button
        title='Login'
        onPress={() => props.navigation.navigate('Login')}
      />
    </Layout>
  );
};

export default Landing;
