import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Layout from '../components/Layout/Layout';
import SignUpForm from '../components/UserForms/SignUpForm';
import { connect } from 'react-redux';
import { getLocalData } from '../store/actions/asyncStorage.js';

const SignUp = props => {

  useEffect(() => {
    getLocalData('currentUser')
    .then(res => {
      if (res == null) {

      } else {
        console.log('isLoading: ', props.isLoading)
        props.navigation.navigate('Dashboard');
      }
    })
    .catch(err => {
      console.log(err);
    })
  }, [props.isLoggedIn]);

  return props.isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <Layout>
      <SignUpForm navigate={props.navigation.navigate}/>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    isLoading: state.user.currentUser.isLoading
  };
};

export default connect(
  mapStateToProps,
  {

  }
)(SignUp);
