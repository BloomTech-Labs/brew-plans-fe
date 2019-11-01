import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const SeededRecipe = props => {
  const { recipe } = props;
  console.log("recipe", recipe)
  console.log("props", props)
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 8,
    padding: 16,
    justifyContent: 'center',
    borderRadius: 5
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

export default SeededRecipe;
