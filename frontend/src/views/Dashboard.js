import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { setTokenInState, userLogout } from '../store/actions/index.js';
import * as firebase from 'firebase';
import axios from 'axios';

const Dashboard = props => {

  return (
    <View style={{ flex: 1 }}>
      <NavBar {...props} />
        <ImageBackground source={require('../../assets/DashboardImage.jpeg')} style={{ height: '100%', width: '100%' }}>
          <Text style={styles.title}>Welcome {props.currentUser.name}</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('MyRecipes')} style={{ marginVertical: 200, alignSelf: 'center', width: '40%', padding: 8, backgroundColor: '#870c27', borderRadius: 10 }}>
            <Text style={{ color:  'white', alignSelf: 'center', fontSize: 30 }}>Start</Text>
          </TouchableOpacity>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    position: 'absolute',
    top: 20,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20
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
