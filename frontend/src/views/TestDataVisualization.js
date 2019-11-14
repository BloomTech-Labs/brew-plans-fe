import React, { useEffect } from 'react';
import { Button } from 'react-native';
import Layout from '../components/Layout/Layout';
import DisplaySeededRecipes from '../../src/components/TestToDisplayData/DisplaySeededRecipes.js';
import DisplayUserRecipes from '../../src/components/TestToDisplayData/DisplayUserRecipes';
import DisplayUserData from '../../src/components/TestToDisplayData/DisplayUserData.js';
import { connect } from 'react-redux';

import LogForm from "../components/UserForms/LogForm"

const TestDataVisualization = (props) => {
  return (
    <Layout>
      <LogForm/>
      {/* <DisplaySeededRecipes />
      <DisplayUserRecipes />
      <DisplayUserData /> */}
    </Layout>
  );
};

export default connect()(TestDataVisualization);