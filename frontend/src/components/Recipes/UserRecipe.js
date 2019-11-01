import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const UserRecipe = props => {
  return (
    <TouchableOpacity onPress={props.pressed} style={styles.recipeContainer}>
      <Text style={styles.recipeTitle}>{props.title}</Text>
      <View style={styles.recipeInfoContainer}>
        <View style={styles.recipeInfo}>
          <Text>{props.brew_type}</Text>
        </View>
        <View style={styles.coarseness}>
          <Text>Coarseness: {props.coarseness}</Text>
        </View>
        <View style={styles.recipeInfo}>
          <Text>{props.water_temp}</Text>
          <MaterialCommunityIcons
            name={'temperature-fahrenheit'}
            size={16}
            color={'black'}
          />
        </View>
      </View>
      <View style={styles.recipeInfoContainer}>
        <TouchableOpacity onPress={props.edit}>
          <MaterialIcons name={'edit'} size={20} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.delete}>
          <MaterialIcons name={'delete'} size={20} color={'black'} />
        </TouchableOpacity>
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
  },
  coarseness: {
    position: 'absolute',
    left: 0
  }
});

export default UserRecipe;
