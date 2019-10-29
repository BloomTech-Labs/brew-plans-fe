import React, { useEffect } from 'react';
import { View } from 'react-native';
import Layout from '../components/Layout/Layout';
import LandingButton from '../components/Landing/LandingButton';
import { connect } from 'react-redux';
import { getLocalData } from '../store/actions/asyncStorage.js';

const Landing = props => {
  const { loggedIn } = props;

  useEffect(() => {
    getLocalData('token')
    .then(res => {
      if (res == null) {
        console.log('null storage in landing: ', res)
      } else {
        props.navigation.navigate('MyRecipes');
      }
      
    })
    .catch(err => {
      console.log(err);
    })
  }, [loggedIn]);

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
    loggedIn: state.user.currentUser.loggedIn
  };
};

export default connect(mapStateToProps)(Landing);
