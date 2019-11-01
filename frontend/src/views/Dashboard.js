import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import { View, Text, Button, StyleSheet } from 'react-native';
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
          <Text style={styles.title}>My Dashboard</Text>
        {props.children}
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    position: 'absolute',
    top: 20
  }
})

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
