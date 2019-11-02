import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import styles from '../styling/SeededRecipesStyling';
import { View, ScrollView, Text, Button, TouchableOpacity } from 'react-native';
import { setTokenInState, userLogout } from '../store/actions/index.js';
import * as firebase from 'firebase';
import axios from 'axios';
import { getSeededRecipes } from '../store/actions/index.js';

// Seeded Recipe page

const SeededRecipe = props => {
  const { currentRecipe } = props;

  console.log('recipe: ', currentRecipe);

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <NavBar {...props} />
      <Layout>
        <ScrollView>
          <TouchableOpacity key={currentRecipe.id}>
            <Text style={styles.recipeTitle}>{currentRecipe.title}</Text>
            <View style={styles.recipeDetails}>
              <Text style={styles.recipeDetailItem}>
                Brew Type: {currentRecipe.brew_type}
              </Text>
              <Text style={styles.recipeDetailItem}>
                Water Temperature: {currentRecipe.water_temp}
              </Text>

              <Text>{currentRecipe.instructions}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </Layout>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    currentRecipe: state.user.currentRecipe
  };
};

export default connect(mapStateToProps)(SeededRecipe);
