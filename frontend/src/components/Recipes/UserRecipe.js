import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { setRecipeToEdit } from '../../store/actions/userRecipes.js';
import styles from '../../styling/UserRecipeStyling';
import { IconButton } from 'react-native-paper';

const UserRecipe = props => {
  const { recipe } = props;

  return (
    <TouchableOpacity onPress={props.pressed} style={styles.recipeContainer}>
      <Text style={styles.recipeTitle}>{recipe.title}</Text>

      <View style={styles.recipeInfoContainer}>
        <View style={styles.recipeInfo}>
          <Text>
            Brew Type: {recipe.brew_type}
            {'\n'}
            Brewing Temperature: {recipe.water_temp}
            <MaterialCommunityIcons
              name={'temperature-fahrenheit'}
              size={16}
              color={'black'}
            />
            {'\n'}
            Coarseness: {recipe.coarseness}
          </Text>
        </View>
      </View>

      <View style={styles.recipeInfoContainer}>
        <TouchableOpacity
          onPress={() => {
            props.edit();
            props.setRecipeToEdit(recipe);
          }}
        >
          <MaterialIcons name={'edit'} size={20} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={props.delete}>
          <MaterialIcons name={'delete'} size={20} color={'black'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => {
  return {
    recipeToEdit: state.userRecipes.recipeToEdit
  };
};

export default connect(
  mapStateToProps,
  {
    setRecipeToEdit
  }
)(UserRecipe);
