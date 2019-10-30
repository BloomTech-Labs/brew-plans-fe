import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import { View, Text, Button } from 'react-native';
import { setTokenInState, userLogout } from '../store/actions/index.js';
import * as firebase from 'firebase';
import axios from 'axios';

const Dashboard = props => {
  const { currentUser } = props;

  const test3 = () => {
    const user = firebase.auth().currentUser;
    console.log('currentUser: ', user);
  };

  const test5 = token => {
    axios
      .get('https://backend-development-coffee.herokuapp.com/master', {
        headers: { authorization: `Bearer ${token}` }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const test6 = () => {
    firebase
      .auth()
      .currentUser.delete()
      .then(res => {
        alert('Successfully deleted account!');
      })
      .catch(err => {
        alert(err);
      });
  };

  const test7 = () => {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(res => {
        alert('Verification email sent.');
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <NavBar {...props} />
      <Layout>
        <View style={{ paddingTop: 128 }}>
          <Button title='Show me the User' onPress={() => test3()}></Button>
          <Button
            title='Test Request'
            onPress={() => test5(currentUser.token)}
          ></Button>
          <Button title='Delete my account' onPress={() => test6()}></Button>
          <Button
            title='Send email verification'
            onPress={() => test7()}
          ></Button>
        </View>
        <Text>email: {currentUser.email}</Text>
        <Text>token: {currentUser.token}</Text>
        <Text>id: {currentUser.id}</Text>
        <Text>Currently logged in: {`${currentUser.loggedIn}`}</Text>
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
    userLogout,
    setTokenInState
  }
)(Dashboard);
