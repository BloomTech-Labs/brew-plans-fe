import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Layout from '../components/Layout/Layout';
import SignUpForm from '../components/UserForms/SignUpForm';

const SignUp = props => {

  return (
    <>
      <Image
      style={{
        height: hp('20%'),
        width: wp('100%')
      }}
      source={require('../../assets/login-header.png')}
      /> 
      <Layout>
        <SignUpForm navigate={props.navigation.navigate}/>
      </Layout>
    </>
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
