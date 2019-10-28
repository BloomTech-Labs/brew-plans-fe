import React from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';

import RecipeFormComponent from '../components/UserForms/RecipeFormComponent';

const RecipeForm = props => {
  console.log('props', props);
  return (
    <RecipeFormComponent {...props} />
  );
}

export default RecipeForm;