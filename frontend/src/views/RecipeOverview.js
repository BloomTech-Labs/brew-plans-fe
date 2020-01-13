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
          <Text style={styles.titleTitle}>{currentRecipe.title}</Text>
          <View style={styles.innerBox}>
            <Text style={styles.titleCat}>Creator</Text>
            <Text style={styles.titleCat}>Brew Temp</Text>
            <Text style={styles.titleCat}>Coarseness</Text>
          </View>
          <View style={styles.innerBox}>
            <Text style={styles.titleContent}>Brew Plans</Text>
            <Text style={styles.titleContent}>{currentRecipe.water_temp}</Text>
            <Text style={styles.titleContent}>Medium</Text>
          </View>
          
        </View>
        <ScrollView>
          <View>
            <View style={styles.contentBox}>
              <Text>You'll Need...</Text>
              <Text>
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
                <Text key={index}>{instruction}</Text>
              ))}
            </View>
            <View style={styles.contentBox}>
              <Text>Yield: 2 cups</Text>
              <Text>Time: 4 minutes</Text>
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