import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Layout from '../components/Layout/Layout';
import TestDataVisualization from './TestDataVisualization.js';
import Navbar from '../components/Layout/Navbar';

const Dashboard = props => {
  return (
    <Layout>
<<<<<<< HEAD
      <Navbar />
      <TestDataVisualization/>
=======
      <TestDataVisualization />
>>>>>>> 16bbc85d2142845f44aa2e3065b7b94c16b222a4
    </Layout>
  );
};

export default Dashboard;
