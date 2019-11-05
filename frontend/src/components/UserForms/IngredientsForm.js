import React, { useState } from 'react';
import { View } from 'react-native';
import { OurButton as IngredientButton } from './SubmitButton';
import { withTheme, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { handleNewRecipeInput } from '../../store/actions/index';
import styles from '../../styling/IngredientsFormStyling';

const IngredientsForm = props => {
  const { ingredients } = props;

  // {ingredients.length > 0 ? (
  // ingredients.map((ingredient, index) => {
  return (
    <View style={styles.formView}>
      <TextInput
        style={styles.formInput}
        onChangeText={value => handleNewRecipeInput('Ingredients', value)}
        // onBlur={props.handleBlur('Ingredients')}
        // value={ingredient} // cha[index]nge this!
        label='Ingredients'
        mode='outlined'
        placeholder='What goes into the recipe?'
      />
      <IngredientButton
        title='Delete'
        //  onPress={(ingredients -= value)}
      />
    </View>
  );
  // )})
  // ) : (
  //     <View>
  //         <TextInput
  //         style={styles.formInput}
  //         onChangeText = {() => {}}
  //         // onBlur={props.handleBlur('Additional Ingredient?')}
  //         value={ingredients} // change this!
  //         label='Additional Ingredient?'
  //         mode='outlined'
  //         placeholder='Anything Else you would like to Add?' />
  //     </View>
  // )}
  //
};


const mapStateToProps = state => {
  return {
    ingredients: state.userRecipes.newRecipe.ingredients
  };
};

export default connect(
  mapStateToProps,
  { handleNewRecipeInput }
)(IngredientsForm);
