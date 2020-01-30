import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text } from 'react-native';

import OverviewBar from '../components/Layout/OverviewBar';
import styles from '../styling/RecipeOverviewStyling';
import { pourOver, aeroPress, mokaPot, frenchPress } from '../views/RecipeOverviewTools';

const RecipeOverview = props => {
  const [pourOverTools, setPourOverTools] = useState(pourOver);
  const [aeroPressTools, setAeroPressTools] = useState(aeroPress);
  const [mokaPotTools, setmokaPotTools] = useState(mokaPot);
  const [FrenchPressTools, setFrenchPressTools] = useState(frenchPress);
  
  const [ sortedInstructions, setSortedInstructions ] = useState([]);
  const { currentRecipe } = props;
  const { instructions } = currentRecipe;

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
  }, []);

  const toolsMapper = function () {
    let title = currentRecipe.title;
    if(title.includes('Pour')) {
    return <View>{pourOverTools}</View>
    } else if(title.includes('Aeropress')) {
      return <View>{aeroPressTools}</View>
    } else if(title.includes('Moka')) {
      return <View>{mokaPotTools}</View>
    } else if(title.includes('French')) {
      return <View>{FrenchPressTools}</View>
    }
    return toolsMapper;
  }

  return (
    <View style={{ flex: 1 }}>
      <OverviewBar {...props} />
      <ScrollView style={{ flex: 1 }}>
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
          <View>
            {toolsMapper()}
            
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
                <Text style={styles.yieldRegularText}>2 cups</Text>
              </View>
              <View style={styles.yieldBox}>
                <Text style={styles.yieldBoldText}>Time</Text>
                <Text style={styles.yieldRegularText}>4 minutes</Text>
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