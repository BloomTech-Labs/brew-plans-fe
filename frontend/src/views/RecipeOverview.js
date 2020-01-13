import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text } from 'react-native';

import NavBar from '../components/Layout/NavBar/NavBar';
import styles from '../styling/RecipeOverviewStyling';

const RecipeOverview = props => {
  const [ sortedInstructions, setSortedInstructions ] = useState([]);
  const { currentRecipe } = props;
  const { instructions } = currentRecipe;

  const regex = new RegExp(/^\d+/g);

  useEffect(() => {
    if(instructions) {
      const instructionsArray = instructions.split("////");
      let localInstructions = [];

      instructionsArray.map((instruction, index) => {
        let step = `Step ${index + 1}
`;
        const result = instruction.match(regex);

        if(result) {
          instruction = instruction.substr(instruction.indexOf(" ") + 1);
        };

        let res = step.concat(instruction);
        localInstructions.push(res);
      });

      setSortedInstructions([...localInstructions]);
    };
  }, []);

  return (
    <View>
      <NavBar {...props}/>
      <View style={styles.viewBox}>
        <View style={styles.titleBox}>
          <Text style={styles.titleText}>{currentRecipe.title}</Text>
          <View style={styles.innerBox}>
            <View style={styles.catBox}>
              <Text style={styles.lightText}>Creator</Text>
              <Text style={styles.mediumText}>Brew Plans</Text>
            </View>
            <View style={styles.catBox}>
              <Text style={styles.lightText}>Brew Temp</Text>
              <Text style={styles.mediumText}>{currentRecipe.water_temp}º F</Text>
            </View>
            <View style={styles.catCoarse}>
              <Text style={styles.lightText}>Coarseness</Text>
              <Text style={styles.mediumText}>Medium-Coarse</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View>
            <View style={styles.contentBox}>
              <Text style={styles.titleText}>You'll Need...</Text>
              <Text style={styles.lightText}>
                Tool 1
                Tool 2
                Grounds 1
                Water
                Etc.
              </Text>
            </View>
            <View style={styles.contentBox}>
              {sortedInstructions.map((instruction, index) => (
                // <Text key={index}>{this.step}</Text>
                <Text style={styles.regularText} key={index}>{instruction}</Text>
              ))}
            </View>
            <View style={styles.contentBox}>
              <View style={styles.yieldBox}>
                <Text style={styles.yieldBoldText}>Yield</Text>
                <Text style={styles.yieldRegularText}>2 cups</Text>
              </View>
              <View style={styles.yieldBox}>
                <Text style={styles.yieldBoldText}>Time</Text>
                <Text style={styles.yieldRegularText}>4 minutes</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    currentRecipe: state.user.currentRecipe
  };
};

export default connect(mapStateToProps)(RecipeOverview);