import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Layout from '../components/Layout/Layout';
import TestDataVisualization from './TestDataVisualization.js';
import Navbar from '../components/Layout/Navbar';

const Dashboard = props => {
  return (
    <Layout>
      <Navbar />
      <TestDataVisualization />
    </Layout>
  );
};

export default Dashboard;
