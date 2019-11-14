import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, ScrollView, Text, Image } from "react-native";

import Layout from "../components/Layout/Layout";
import NavBar from "../components/Layout/NavBar/NavBar.js";
import styles from "../styling/SeededRecipesStyling";
import Timer from "../components/timer";

const Recipe = props => {
  const [sortedInstructions, setSortedInstructions] = useState([]);
  const [timerArray, setTimerArray] = useState([]);
  const { currentRecipe } = props;
  const { instructions } = currentRecipe;

  //captures strings starting with integers
  const regex = new RegExp(/^\d+/g);
  console.log("recipe: ", currentRecipe);

  useEffect(() => {
    if (instructions) {
      const instructionsArray = instructions.split("////");
      let localTimerArray = [];
      let localInstructions = [];
      // setSortedInstructions(
      instructionsArray.map((instruction, index) => {
        let step = `Step ${index + 1}: `;

        const result = instruction.match(regex);
        // console.log("result", result);
        // console.log("istruction", instruction);

        if (result) {
          // setTimerArray([...timerArray, parseInt(result[0])])
          // console.log("IF", timerArray)
          localTimerArray.push(parseInt(result[0]));
        } else {
          localTimerArray.push(0);
          // setTimerArray([...timerArray, 0])
          // console.log("ELSE", timerArray)
        }

        let res = step.concat(instruction);
        localInstructions.push(res);
        // setSortedInstructions([...sortedInstructions, res])
        // return res;
      });
      // );
      console.log("localtimerArray", localTimerArray);
      setSortedInstructions([...localInstructions]);
      console.log("Instructions", sortedInstructions);
      setTimerArray([...localTimerArray]);
      console.log("TimerArray", timerArray);
    }
  }, []);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <NavBar {...props} />
      <Image
        source={require("../../assets/RecipeImage.png")}
        style={{ width: "100%", height: "25%" }}
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
                <View key={index}>
                  {timerArray[index] ? (
                    <View key={index}>
                      <Text
                        style={{
                          marginVertical: 5,
                          backgroundColor: "white",
                          padding: 6,
                          fontSize: 16,
                          borderBottomWidth: 0.8,
                          borderBottomColor: "black"
                        }}
                        key={index}
                      >
                        {instruction}
                      </Text>
                      <Timer stepLength={timerArray[index]} />
                    </View>
                  ) : (
                    <Text
                      style={{
                        marginVertical: 5,
                        backgroundColor: "white",
                        padding: 6,
                        fontSize: 16,
                        borderBottomWidth: 0.8,
                        borderBottomColor: "black"
                      }}
                      key={index}
                    >
                      {instruction}
                    </Text>
                  )}
                </View>
              ))}
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
