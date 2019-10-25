import React from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';

import RecipeFormComponent from '../components/UserForms/RecipeForm';

const RecipeForm = props => {
  console.log('props', props);
  return (
    <View>
    <RecipeFormComponent {...props} />
    </View>
  );
}

export default RecipeForm;