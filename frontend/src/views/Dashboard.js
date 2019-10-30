import React, { useEffect } from 'react';
// import { AsyncStorage, Button } from 'react-native';
// import { DrawerActions } from 'react-navigation-drawer';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import { View } from 'react-native';
import { getLocalData } from '../store/actions/asyncStorage.js';

const Dashboard = props => {
  
  return (
    <View style={{ flex: 1 }}>
      <NavBar {...props} />
      <Layout>{props.children}</Layout>
    </View>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps,
  {

  }
)(Dashboard);
