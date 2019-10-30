import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import { View, Text, Button } from 'react-native';
import { setTokenInState, userLogout } from '../store/actions/index.js';
import * as firebase from 'firebase';
import axios from 'axios';

const Recipe = props => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar {...props} />
      <Layout></Layout>
    </View>
  );
};

export default Recipe;
