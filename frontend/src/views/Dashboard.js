import React from 'react';
import { Text, View } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Layout from '../components/Layout/Layout';

const Dashboard = props => {
  console.log(props)
  props.navigation.dispatch(DrawerActions.closeDrawer());
  return (
    <Layout>
      <Text>Dashboard</Text>
    </Layout>
  );
};

export default Dashboard;