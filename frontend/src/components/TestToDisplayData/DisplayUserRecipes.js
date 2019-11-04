import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import {
  getUserRecipes
} from '../../store/actions/index.js'

const DisplayUserRecipes = props => {
  useEffect(() => {
    props.getUserRecipes();
  }, []);
  return (
    <View>
      <Text>USER_RECIPES</Text>
      {props.userRecipes.map((recipe, index) => {
        return (
          <View key={index}>
            <Text>RECIPE_ID: {recipe.id}</Text>
            <Text>RECIPE_COARSENESS: {recipe.coarseness}</Text>
          </View>
        );
      })}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    userRecipes: state.userRecipes.userRecipes,
    isLoading: state.userRecipes.isLoading
  }
}

export default connect(
  mapStateToProps,
  {
    getUserRecipes
  }
)(DisplayUserRecipes)