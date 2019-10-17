import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import {
  getSeededRecipes
} from '../../store/actions/index.js';

const DisplaySeededRecipes = (props) => {
    console.log(props.getSeedRecipes());
  

  return (
    <View>
      {props.seededRecipes.map(recipe => {
        return (
          <Text>{recipe.instructions}</Text>
        );
      })}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    seededRecipes: state.seededRecipes.seededRecipes,
    isLoading: state.seededRecipes.isLoadinng
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSeedRecipes: () => dispatch(getSeededRecipes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplaySeededRecipes);