import React from 'react';
import Layout from '../components/Layout/Layout';
import SignUpForm from '../components/UserForms/SignUpForm';
import { connect } from 'react-redux';

const SignUp = props => {

  return (
    <Layout>
      <SignUpForm navigate={props.navigation.navigate}/>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
  {

  }
)(SignUp);
