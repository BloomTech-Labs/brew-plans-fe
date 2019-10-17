import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import {
  getSeededRecipes
} from '../../store/actions/index.js';

const DisplaySeededRecipes = (props) => {
  useEffect(() => {
    props.getSeededRecipes();
  }, []);

  return (
    <View>
      <Text>SEEDED_RECIPES</Text>
      {props.seededRecipes.map((recipe, index) => {
        return (
          <View key={index}>
            <Text>RECIPE_ID: {recipe.id}</Text>
            <Text>RECIPE_INSTRUCTIONS: {recipe.instructions}</Text>
          </View>
        );
      })}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    seededRecipes: state.seededRecipes.seededRecipes,
    isLoading: state.seededRecipes.isLoading
  };
};

export default connect(
  mapStateToProps,
  {
    getSeededRecipes
  }
)(DisplaySeededRecipes);