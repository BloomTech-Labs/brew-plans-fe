import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import styles from '../styling/SeededRecipesStyling';
import { View, ScrollView, Text, Button, TouchableOpacity } from 'react-native';

const Recipe = props => {
  const [ sortedInstructions, setSortedInstructions ] = useState([]);
  const { currentRecipe } = props;
  const { instructions } = currentRecipe;

  console.log('recipe: ', currentRecipe);

  useEffect(() => {
    if (instructions) {
      const instructionsArray = instructions.split("////");

      setSortedInstructions(
      instructionsArray.map((instruction, index) => {
        let step = `Step ${index + 1}: `
        let res = step.concat(instruction);
        return res;
      }
    ))
    }
  }, [])

  console.log(sortedInstructions)

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <NavBar {...props} />
      <Layout>
        <ScrollView>
            <Text style={styles.recipeTitle}>{currentRecipe.title}</Text>
            <View style={styles.recipeDetails}>
              <Text style={styles.recipeDetailItem}>
                Brew Type: {currentRecipe.brew_type}
              </Text>
              <Text style={styles.recipeDetailItem}>
                Water Temperature: {currentRecipe.water_temp}
              </Text>

              <ScrollView>
                {sortedInstructions.map((instruction, index) => <Text style={{ marginVertical: 5, backgroundColor: 'white', padding: 6, fontSize: 16, borderBottomWidth: .8, borderBottomColor: 'black' }} key={index}>{instruction}</Text>)}
              </ScrollView>
            </View>
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

export default connect(mapStateToProps)(Recipe);
