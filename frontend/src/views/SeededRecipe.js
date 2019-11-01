import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import { View, ScrollView, Text, Button } from 'react-native';
import { setTokenInState, userLogout } from '../store/actions/index.js';
import * as firebase from 'firebase';
import axios from 'axios';
import { getSeededRecipes } from '../store/actions/index.js';

// Seeded Recipe page

const SeededRecipe = props => {
  const { recipe } = props;
  useEffect(() => {
    props.getSeededRecipes();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <NavBar {...props} />
      <Layout>
        <ScrollView>
          {props.seededRecipes.map(recipe => (
            <View key={recipe.id}>
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
              <View style={styles.recipeDetails}>
                <Text style={styles.recipeDetailItem}>
                  Brew Type: {recipe.brew_type}
                </Text>
                <Text style={styles.recipeDetailItem}>
                  Water Temperature: {recipe.water_temp}
                </Text>

                <Text>{recipe.instructions}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </Layout>
    </View>
  );
};

const styles = {
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  recipeDetails: {
    marginTop: 16
  },
  recipeDetailItem: {
    fontSize: 16,
    marginBottom: 8
  }
};

const mapStateToProps = state => {
  return {
    seededRecipes: state.seededRecipes.seededRecipes
  };
};

export default connect(
  mapStateToProps,
  { getSeededRecipes }
)(SeededRecipe);
