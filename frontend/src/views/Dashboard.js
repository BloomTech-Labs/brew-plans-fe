import React, { useEffect } from 'react';
import { AsyncStorage, Button } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Layout from '../components/Layout/Layout';
import TestDataVisualization from './TestDataVisualization.js';
import { getLocalData } from '../store/actions/asyncStorage.js';

const Dashboard = props => {
  console.log('dashboard props: ', props);
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
        props.navigation.navigate('Landing')
      }} 
      title='Logout'
      />
      <TestDataVisualization />
    </Layout>
  );
};

export default Dashboard;
