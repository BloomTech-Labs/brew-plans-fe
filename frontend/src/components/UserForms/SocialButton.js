import React from 'react';
// import { IconButton } from 'react-native-paper';
import { TouchableOpacity, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { googleSignIn } from '../../store/actions/index.js';

const SocialButton = props => {
  // console.log(props);
  return (
    <View>
    <TouchableOpacity onPress={() => props.googleSignIn(props.loginConfig)}>
    <Image style={{width: 280, height: 42, borderWidth: 2, borderColor:'#1F2233', marginLeft: -96, marginTop: 60, marginBottom: 22}} source={require('../../../assets/google.png')}/>
    
      {/* <Ionicons name={props.icon} size={36} color={'black'} /> */}
    </TouchableOpacity>
    <TouchableOpacity>
    <Image style={{width: 280, height: 42, borderWidth: 2, borderColor:'#1F2233', marginLeft: -96}} source={require('../../../assets/facebook.png')}/>
    
    </TouchableOpacity>
    </View>
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
