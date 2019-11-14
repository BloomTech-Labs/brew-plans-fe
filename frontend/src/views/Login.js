import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import LoginForm from '../components/UserForms/LoginForm';
import { getLocalData } from '../store/actions/asyncStorage.js';
import { connect } from 'react-redux';
import TestDataVisualization from './TestDataVisualization';


const Login = props => {
  const { loggedIn } = props;

  useEffect(() => {
    getLocalData('token')
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
      {/* <TestDataVisualization/> */}
      <LoginForm />
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
)(Login);
