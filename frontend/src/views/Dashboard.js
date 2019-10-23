import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import TestDataVisualization from './TestDataVisualization.js';
import Navbar from '../components/Layout/NavBar/Navbar';

const Dashboard = props => {
  return (
    <Layout>
      {/* <TestDataVisualization /> */}
      <Navbar {...props} />
    </Layout>
  );
};

export default Dashboard;
