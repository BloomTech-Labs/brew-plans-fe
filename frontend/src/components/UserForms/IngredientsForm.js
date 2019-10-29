import React, { useState } from 'react';
import { View } from 'react-native';
import {OurButton as IngredientButton} from './SubmitButton';

const IngredientsForm = props => {
    const { ingredients } = props.recipe;
    
    {ingredients.length > 0 ? (
    ingredients.map((ingredient, index) => {
        return (
        <View>
            <TextInput
            //style={styles.formInput}
            onChangeText = {(value) => handleNewRecipeInput('Ingredients', value)}
            onBlur={props.handleBlur('Ingredients')}
            value={ingredient} // cha[index]nge this!
            label='Ingredients'
            mode='outlined'
            placeholder='What goes into the recipe?'
            /> 
            <IngredientButton title="Delete" onPress={ingredients -= value}/>
        </View>
    )})
    ) : (
        <View>
            <TextInput
            style={styles.formInput}
            onChangeText = {(value)=> handleNewRecipeInput('Ingredient', value)}
            onBlur={props.handleBlur('Additional Ingredient?')}
            value={recipe.ingredients.ingredient} // change this!
            label='Additional Ingredient?'
            mode='outlined'
            placeholder='Anything Else you would like to Add?' />
        </View>
    )}
}
export default IngredientsForm;