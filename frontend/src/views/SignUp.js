import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Layout from '../components/Layout/Layout';
import SignUpForm from '../components/UserForms/SignUpForm';
import { connect } from 'react-redux';
import { getLocalData } from '../store/actions/asyncStorage.js';

const SignUp = props => {
  const { loggedIn } = props;

  useEffect(() => {
    getLocalData('user')
    .then(res => {
      if (res == null) {
        // console.log('null storage in signup: ', res)
      } else {
        // console.log('token from storage in signup: ', res)
        props.navigation.navigate('MyRecipes');
      }
    })
    .catch(err => {
      console.log(err);
    })
  }, [loggedIn]);

  return (
    <Layout>
      <SignUpForm navigate={props.navigation.navigate}/>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.user.currentUser.loggedIn
  };
};

export default connect(
  mapStateToProps,
  {

  }
)(SignUp);
