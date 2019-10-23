import React from 'react';
import { View, Text, Button } from 'react-native';
import Layout from '../components/Layout/Layout';
import SignUpForm from '../components/UserForms/SignUpForm';
import { connect } from 'react-redux';

const SignUp = props => {
  // console.log('signup view props: ', props)
  // if(props.isLoggedIn) {
  //   props.navigation.navigate('Dashboard')
  // }
  return (
    <Layout>
      <SignUpForm navigate={props.navigation.navigate}/>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  {

  }
)(SignUp);
