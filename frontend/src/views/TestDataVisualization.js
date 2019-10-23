import React, { useEffect } from 'react';
import { Button } from 'react-native';
import Layout from '../components/Layout/Layout';
import DisplaySeededRecipes from '../../src/components/TestToDisplayData/DisplaySeededRecipes.js';
import DisplayUserRecipes from '../../src/components/TestToDisplayData/DisplayUserRecipes';
import DisplayUserData from '../../src/components/TestToDisplayData/DisplayUserData.js';
import { connect } from 'react-redux';

const TestDataVisualization = (props) => {
  return (
    <Layout>
      <DisplaySeededRecipes />
      <DisplayUserRecipes />
      <DisplayUserData />
    </Layout>
  );
};

export default connect()(TestDataVisualization);