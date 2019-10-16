import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import {
  getUserRecipes
} from '../../store/actions/index.js'

const DisplayUserRecipes = props => {
  const userRecipes = props.getUserRecipes(1);
  console.log(userRecipes);
  return (
    <View>
      {props.userRecipes.map(recipe => {
        return (
          <Text>{recipe.title}</Text>
        );
      })}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    userRecipes: state.userRecipes.userRecipes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserRecipes: (id) => dispatch(getUserRecipes(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayUserRecipes)