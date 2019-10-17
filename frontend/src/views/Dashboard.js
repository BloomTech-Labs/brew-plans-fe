import React from 'react';
import { Text, View } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Layout from '../components/Layout/Layout';
import TestDataVisualization from './TestDataVisualization.js';

const Dashboard = props => {
  return (
    <Layout>
      <TestDataVisualization/>
    </Layout>
  );
};

export default Dashboard;