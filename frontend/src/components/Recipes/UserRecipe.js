import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { setRecipeToEdit } from '../../store/actions/userRecipes.js';
import { setCurrentRecipe } from '../../store/actions/user';
// import styles from '../../styling/UserRecipeStyling';

const UserRecipe = props => {
  const { recipe, setEditRecipeModal, editRecipeModal } = props;

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
            props.setRecipeToEdit(recipe.id);
            props.setCurrentRecipe(recipe);
            setEditRecipeModal(!editRecipeModal)
            // props.edit();
          }}
        >
          <MaterialIcons name={'edit'} size={25} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => props.delete()}>
          <MaterialIcons name={'delete'} size={25} color={'red'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    width: '100%',
    backgroundColor: '#f7f7f7',
    marginVertical: 8,
    padding: 16,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'lightgray'
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  recipeInfoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  },
  recipeInfo: {
    flexDirection: 'row'
  }
});

const mapStateToProps = state => {
  return {
    recipeToEdit: state.userRecipes.recipeToEdit
  };
};

export default connect(
  mapStateToProps,
  {
    setRecipeToEdit,
    setCurrentRecipe
  }
)(UserRecipe);
