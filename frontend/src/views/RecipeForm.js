import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import RecipeFormComponent from '../components/UserForms/RecipeFormComponent';
import AddRecipeForm from '../components/UserForms/AddRecipeForm';

const RecipeForm = props => {
  console.log('props', props);
  return (
    // when you add ingredient it checks ingrediant table to see if its there, if not it will add it
    // create addMore component to add aditional steps.

    // Example Recipe Object

    // {"title": "",
    // "brew_type": "",
    // "public_private": "",
    // "water_temp": "",
    // "user_id": "",
    // "courseness": "",
    // "ingredients": {
    //   1:{
    //   "quantity": "",
    //   "ingredient_title"
    //   },
    //   2: {
    //   "quantity": "",
    //   "ingredient_title"
    //   }
    // }

    <AddRecipeForm {...props} />
  );
};

export default RecipeForm;
