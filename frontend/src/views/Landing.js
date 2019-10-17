import React from 'react';
import { View } from 'react-native';
import Layout from '../components/Layout/Layout';
import LandingButton from '../components/Landing/LandingButton';
import TestDataVisualization from '../views/TestDataVisualization';
import { connect } from 'react-redux';
import { Google } from 'expo';

const googleSignIn = async () => {
  const { type, accessToken, user } = await Google.logInAsync({
    androidClientId: `449923889220-pa3veecaq72o4tiairfrputrj7f0dp2n.apps.googleusercontent.com`
  });

  if (type === 'success') {
    /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
    console.log(user);
  }
};

const Landing = props => {
  const { isLoggedIn } = props;

  return (
    <Layout>
      {isLoggedIn ? (
        <TestDataVisualization />
      ) : (
        <View>
          <LandingButton title='Sign Up' onPress={() => googleSignIn()} />
          <LandingButton
            title='Login'
            onPress={() => props.navigation.navigate('Login')}
          />
        </View>
      )}
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(mapStateToProps)(Landing);
