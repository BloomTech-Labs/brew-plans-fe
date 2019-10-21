import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import TestDataVisualization from './TestDataVisualization.js';
import Navbar from '../components/Layout/Navbar';

const Dashboard = props => {
  return (
    <Layout>
      {/* <TestDataVisualization /> */}
      <Navbar />
    </Layout>
  );
};

export default Dashboard;
