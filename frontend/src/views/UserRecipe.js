import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { View, ScrollView, Text, Image } from 'react-native';

import Layout from '../components/Layout/Layout';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import styles from '../styling/SeededRecipesStyling';
import Timer from '../components/timer';
import axios from 'axios';

//Recipe
const UserRecipe = props => {
  const { currentRecipe } = props;

  const [sortedInstructions, setSortedInstructions] = useState([]);
  const [instructionsLoaded, setInstructionsLoaded] = useState(false);

  const [timerArray, setTimerArray] = useState([]);

  useEffect(() => {
    console.log('currentRecipe', currentRecipe);
  }, []);

  useEffect(() => {
    axios.get(
      `https://backend-development-coffee.herokuapp.com/userrecipes/${currentRecipe.id}`
    )
      .then(res => {
        const currentInstructions = res.data.instructions;
        console.log('currentInstructions', currentInstructions);
        setSortedInstructions(currentInstructions);
        setInstructionsLoaded(true);
      })
      .catch(err => {
        console.log('error', err);
      });
  }, []);

  console.log('currentRecipe', currentRecipe);
  //   const { instructions } = currentRecipe;

  //captures strings starting with integers
  const regex = new RegExp(/^\d+/g);

  //   useEffect(() => {
  //     if (instructions) {
  //       const instructionsArray = instructions.split('////');
  //       let localTimerArray = [];
  //       let localInstructions = [];

  //       instructionsArray.map((instruction, index) => {
  //         let step = `Step ${index + 1}: `;

  //         const result = instruction.match(regex);

  //         if (result) {
  //           localTimerArray.push(parseInt(result[0]));
  //           instruction = instruction.substr(instruction.indexOf(' ') + 1);
  //         } else {
  //           localTimerArray.push(0);
  //         }

  //         let res = step.concat(instruction);
  //         localInstructions.push(res);
  //       });

  //       setSortedInstructions([...localInstructions]);
  //       setTimerArray([...localTimerArray]);
  //     }
  //   }, []);

  return (
    <View style={{ flex: 1, width: '100%' }}>
      {/* {instructionsLoaded ? ( <View> */}
      <NavBar {...props} />
      <Image
        source={require('../../assets/RecipeImage.png')}
        style={{ width: '100%', height: '25%' }}
      />
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
              {sortedInstructions.map((instruction, index) => (
                <View
                  key={index}
                  style={{
                    borderBottomWidth: 0.8,
                    borderBottomColor: 'black'
                  }}
                >
                  {instruction.duration ? (
                    <View key={index}>
                      <Text
                        style={{
                          marginVertical: 5,
                          backgroundColor: 'white',
                          padding: 6,
                          fontSize: 16
                        }}
                      >
                        Step {index + 1}: {instruction.text}
                      </Text>
                      <Timer stepLength={instruction.duration} />
                    </View>
                  ) : (
                    <Text
                      style={{
                        marginVertical: 5,
                        backgroundColor: 'white',
                        padding: 6,
                        fontSize: 16
                        // borderBottomWidth: 0.8,
                        // borderBottomColor: "black"
                      }}
                      key={index}
                    >
                      Step {index + 1}: {instruction.text}
                    </Text>
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </Layout>
      {/* </View>) : null}  */}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    currentRecipe: state.user.currentRecipe
  };
};

export default connect(mapStateToProps)(UserRecipe);
