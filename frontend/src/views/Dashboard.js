import React, { useEffect } from 'react';
// import { AsyncStorage, Button } from 'react-native';
// import { DrawerActions } from 'react-navigation-drawer';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import { View, Text, Button } from 'react-native';
import { getLocalData } from '../store/actions/asyncStorage.js';
import { setUserInState } from '../store/actions/index.js';
import * as firebase from 'firebase';
import axios from 'axios';
import { getMaxListeners } from 'cluster';

const Dashboard = props => {
  const { currentUser, setUserInState } = props;

  useEffect(() => {
    getLocalData('user')
      .then(res => {
        // console.log('user in storage: ', res)
        setUserInState(res)
        console.log(res.id)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  console.log(firebase.auth())

  // const test = (currentUser) => {
  //   axios.get(`https://backend-development-coffee.herokuapp.com/master`,
  //   {
  //     headers: {
  //       authorization: `${currentUser.token}`,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     console.log(currentUser.token)
  //   })
  // }

  console.log('current user: ', currentUser)
  
  return (
    <View style={{ flex: 1 }}>
      <NavBar {...props} />
      <Layout>
        <Button title="Please Work" onPress={() => test(currentUser)}></Button>
      <Text>email: {currentUser.email}</Text>
      <Text>token: {currentUser.token}</Text>
      <Text>id: {currentUser.id}</Text>
      {props.children}
      </Layout>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

export default connect(
  mapStateToProps,
  {
    setUserInState
  }
)(Dashboard);
