import React, { useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';
import Layout from '../components/Layout/Layout';
import LandingButton from '../components/Landing/LandingButton';
import { connect } from 'react-redux';
import { getLocalData } from '../store/actions/asyncStorage.js';

const Landing = props => {

  useEffect(() => {
    getLocalData('signedIn')
      .then(res => {
        if (res == null) {
          
        } else {
          props.navigation.navigate('Dashboard');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <Layout>
        <View>
          <LandingButton
            title='Sign Up'
            onPress={() => props.navigation.navigate('SignUp')}
          />
          <LandingButton
            title='Login'
            onPress={() => props.navigation.navigate('Login')}
          />
        </View>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(mapStateToProps)(Landing);
