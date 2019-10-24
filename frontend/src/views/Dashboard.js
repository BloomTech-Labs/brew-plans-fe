import React, { useEffect } from 'react';
import { AsyncStorage, Button } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Layout from '../components/Layout/Layout';
import TestDataVisualization from './TestDataVisualization.js';
import { connect } from 'react-redux';
import { getLocalData } from '../store/actions/asyncStorage.js';
import Navbar from '../components/Layout/Navbar';
import {
  userLogout
} from '../store/actions/index.js';

const Dashboard = props => {
  useEffect(() => {
    getLocalData('currentUser')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        
      })
  }, []);
  return (
    <Layout>
      <Button 
      onPress={() => { 
        AsyncStorage.clear();
        props.userLogout();
        props.navigation.navigate('Landing');
      }} 
      title='Logout'
      />
      {/* <TestDataVisualization /> */}
      <Navbar {...props} />
    </Layout>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps,
  {
    userLogout
  }
)(Dashboard);
