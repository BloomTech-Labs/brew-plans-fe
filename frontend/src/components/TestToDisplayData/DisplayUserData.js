import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import {
  getUserInfo
} from '../../store/actions/index.js';

const DisplayUserData = (props) => {
  const currentUser = props.getUserInfo(2);
  console.log(props);
  console.log('current user', currentUser)

  return (
    <View>
      <Text></Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: (id) => dispatch(getUserInfo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayUserData)