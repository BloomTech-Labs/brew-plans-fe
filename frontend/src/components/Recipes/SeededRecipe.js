import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const SeededRecipe = props => {
  const { recipe } = props;
  return (
    <TouchableOpacity onPress={props.pressed} style={styles.recipeContainer}>
      <Text style={styles.recipeTitle}>{recipe.title}</Text>
      <View style={styles.recipeInfoContainer}>
        <View style={styles.recipeInfo}>
          <View style={styles.brewType}>
            <Text>
              Brew Type 
            </Text>
            <Text style={{ fontWeight: 'bold' }}>
              {recipe.brew_type}
            </Text>
          </View>
          <View style={ styles.brewTemp }>
            <Text>
            Brew Temp
            </Text>
            <Text style={{ fontWeight: 'bold' }}>
              {recipe.water_temp}
              <MaterialCommunityIcons
              name={'temperature-fahrenheit'}
              size={16}
              color={'black'}
            />
            </Text>
          </View>
          <View style={ styles.brewCoarseness }>
            <Text>
              Coarseness
            </Text>
            <Text style={{ fontWeight: 'bold' }}>
              {recipe.coarseness}
            </Text>
          </View>
        </View>
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
    fontSize: 22,
    fontWeight: 'bold'
  },
  recipeInfoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  },
  recipeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  brewType: {
    justifyContent: 'space-between'
  },
  brewTemp: {
    justifyContent: 'space-between'
  },
  brewCoarseness: {
    justifyContent: 'space-between'
  }
});

export default SeededRecipe;
