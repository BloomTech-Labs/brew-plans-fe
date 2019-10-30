import React from 'react';
// import { IconButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { googleSignIn } from '../../store/actions/index.js';

const SocialButton = props => {
  // console.log(props);
  return (
    <TouchableOpacity onPress={() => props.googleSignIn(props.loginConfig)}>
      <Ionicons name={props.icon} size={36} color={'black'} />
    </TouchableOpacity>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {
    googleSignIn
  }
)(SocialButton);
