import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Layout from '../components/Layout/Layout';

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Nitro Cold Brew'
    },
    {
      id: 2,
      title: 'Vanilla Latte'
    },
    {
      id: 3,
      title: 'Vanilla Cappuccino'
    }
  ]);
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.recipesHeader}>My Recipes</Text>

      <View style={styles.recipesContainer}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={recipes}
          renderItem={({ item, index }) => (
            <View style={styles.recipeContainer}>
              <Text>{item.title}</Text>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: 48,
    paddingHorizontal: 24
  },
  recipesHeader: {
    fontSize: 24
  },
  recipesContainer: {
    marginTop: 32
  },
  recipeContainer: {
    height: 64,
    width: '100%',
    backgroundColor: '#ccc',
    marginVertical: 8,
    padding: 16,
    justifyContent: 'center',
    borderRadius: 5
  }
});

export default MyRecipes;
