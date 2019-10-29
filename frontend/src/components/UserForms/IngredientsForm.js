import React, { useState } from 'react';
import View from 'react-native';

const IngredientsForm = props => {
    const { ingredients } = props.recipe;

return(
    <View>    
        {ingredients.map((ingredient, index) => {
            return <TextInput
            style={styles.formInput}
            onChangeText = {(value) => handleNewRecipeInput('Ingredients', value)}
            onBlur={props.handleBlur('Ingredients')}
            value={ingredient} // change this!
            label='Ingredients'
            mode='outlined'
            placeholder='What goes into the recipe?' />
        })}
    


                
                <AddIngredientButton onPress={ value => ingredients += value} />
                <DeleteIngredientButton onPress={ingredients -= value} />
    </View>
)

}


export default IngredientsForm;