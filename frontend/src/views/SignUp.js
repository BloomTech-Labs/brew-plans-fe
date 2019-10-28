import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Layout from '../components/Layout/Layout';
import SignUpForm from '../components/UserForms/SignUpForm';
import { connect } from 'react-redux';
import { getLocalData } from '../store/actions/asyncStorage.js';

const SignUp = props => {

  useEffect(() => {
    getLocalData('token')
    .then(res => {
      if (res == null) {
        console.log('null storage in signup: ', res)
      } else {
        console.log('token from storage in signup: ', res)
        props.navigation.navigate('Dashboard');
      }
    })
    .catch(err => {
      console.log(err);
    })
  }, [props.isLoading]);

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
    isLoading: state.user.currentUser.isLoading
  };
};

export default connect(
  mapStateToProps,
  {

  }
)(SignUp);
