import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import {
  getUserInfo
} from '../../store/actions/index.js';

const DisplayUserData = (props) => {
  const { currentUser, allUsers } = props;
  useEffect(() => {
    props.getUserInfo();
  }, []);
  console.log('current user', currentUser);
  console.log('all users: ', allUsers);

  return (
    <View>
      <Text></Text>
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