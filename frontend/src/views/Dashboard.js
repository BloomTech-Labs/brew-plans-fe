import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import { View, Text, Button, StyleSheet } from 'react-native';
import { setTokenInState, userLogout } from '../store/actions/index.js';
import * as firebase from 'firebase';
import axios from 'axios';

const Dashboard = props => {

  return (
    <View style={{ flex: 1 }}>
      <NavBar {...props} />
      <Layout>
          <Text style={styles.title}>My Dashboard</Text>
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
