import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useKeepAwake } from 'expo-keep-awake';
import { View, ScrollView, Text } from 'react-native';

import OverviewBar from '../components/Layout/OverviewBar';
import styles from '../styling/RecipeOverviewStyling';

const RecipeOverview = props => {
  console.log('Recipes, Seeded', props);
  useKeepAwake();

  const [ sortedInstructions, setSortedInstructions ] = useState([]);
  const [ sortedToolsIng, setSortedToolsIng ] = useState([]);
  const { currentRecipe } = props;
  const { instructions, tools_ingredients } = currentRecipe;

  const regex = new RegExp(/^\d+/g);

  useEffect(() => {
    if(instructions) {
      const instructionsArray = instructions.split("////");
      let localInstructions = [];

      instructionsArray.map((instruction) => {
        const result = instruction.match(regex);

        if(result) {
          instruction = instruction.substr(instruction.indexOf(" ") + 1);
        };

        localInstructions.push(instruction);
      });

      setSortedInstructions([...localInstructions]);
    };

    if(tools_ingredients) {
      const toolsIngredientsArray = tools_ingredients.split('////');
      let localToolsIngredients = [];

      toolsIngredientsArray.map((tools_ingredients) => {
        const result = tools_ingredients.match(regex);

        if(result) {
          tools_ingredients = tools_ingredients.substr(tools_ingredients.indexOf(' ') + 1);
        };

        localToolsIngredients.push(tools_ingredients);
      });

      setSortedToolsIng([...localToolsIngredients]);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <OverviewBar {...props} />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.viewBox}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}>{currentRecipe.name}</Text>
            <View style={styles.innerBox}>
              <View style={styles.catBox}>
                <Text style={styles.lightText}>Creator</Text>
                <Text style={styles.mediumText}>{currentRecipe.creator}</Text>
              </View>
              <View style={styles.catBox}>
                <Text style={styles.lightText}>Brew Temp</Text>
                <Text style={styles.mediumText}>{currentRecipe.water_temp}º F</Text>
              </View>
              <View style={styles.catCoarse}>
                <Text style={styles.lightText}>Coarseness</Text>
                <Text style={styles.mediumText}>{currentRecipe.coarseness}</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.contentBox}>
              <Text style={styles.titleText}>You'll Need...</Text>
                {sortedToolsIng.map((tools_ingredients, index) => (
                  <View key={index}>
                    <Text style={styles.lightText}>{tools_ingredients}</Text>
                  </View>
                ))}
            </View>
            <View style={styles.contentBox}>
              {sortedInstructions.map((instruction, index) => (
                <View key={index}>
                  <Text style={styles.boldText}>Step {index + 1}</Text>
                  <Text style={styles.regularText}>{instruction}</Text>
                </View>
              ))}
            </View>
            <View style={styles.contentBox}>
              <View style={styles.yieldBox}>
                <Text style={styles.yieldBoldText}>Yield</Text>
                <Text style={styles.yieldRegularText}>{currentRecipe.yield} cups</Text>
              </View>
              <View style={styles.yieldBox}>
                <Text style={styles.yieldBoldText}>Time</Text>
                <Text style={styles.yieldRegularText}>{currentRecipe.duration} minutes</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    currentRecipe: state.user.currentRecipe
  };
};

export default connect(mapStateToProps)(RecipeOverview);