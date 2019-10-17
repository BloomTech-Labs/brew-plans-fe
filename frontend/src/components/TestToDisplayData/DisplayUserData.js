import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import {
  getUserInfo
} from '../../store/actions/index.js';

const DisplayUserData = (props) => {
  const { currentUser, allUsers } = props;
  useEffect(() => {
    props.getUserInfo(3);
  }, []);
  // console.log('current user', currentUser);
  // console.log('all users: ', allUsers);

  return (
    <View>
      <Text>{currentUser.email}</Text>
      <Text>{currentUser.id}</Text>
      <Text>{currentUser.username}</Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    allUsers: state.user.allUsers
  }
}

export default connect(
  mapStateToProps,
  {
    getUserInfo
  }
)(DisplayUserData)