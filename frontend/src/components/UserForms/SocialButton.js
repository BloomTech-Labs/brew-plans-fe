import React from 'react';
import { IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import {
  googleSignIn
} from '../../store/actions/index.js';

const SocialButton = props => {
  // console.log(props);
  return  <IconButton 
          onPress={() => props.googleSignIn(props.loginConfig)} 
          icon={props.icon} 
          size={36} 
          />;
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps,
  {
    googleSignIn
  }
)(SocialButton);
