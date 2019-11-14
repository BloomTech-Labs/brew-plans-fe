import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, ScrollView, Text, Image } from "react-native";

import Layout from "../components/Layout/Layout";
import NavBar from "../components/Layout/NavBar/NavBar.js";
import styles from "../styling/SeededRecipesStyling";
import Timer from "../components/timer";

const Recipe = props => {
  const [sortedInstructions, setSortedInstructions] = useState([]);
  const { currentRecipe } = props;
  const { instructions } = currentRecipe;
  let timerArray = [];
  //captures strings starting with integers
  // const regex =^/[0-9]/d
  // ^([0-9])\d+
  const regex = new RegExp(/^\d+/g);
  console.log("recipe: ", currentRecipe);

  useEffect(() => {
    if (instructions) {
      const instructionsArray = instructions.split("////");

      setSortedInstructions(
        instructionsArray.map((instruction, index) => {
          let step = `Step ${index + 1}: `;
          const result = instruction.match(regex);
          console.log("result", result);
          console.log("istruction", instruction);

          if (result) {
            timerArray.push(parseInt(result[0]));
          } else {
            timerArray.push(0);
          }

          let res = step.concat(instruction);
          return res;
        })
      );
      console.log("timerArray", timerArray);
    }
  }, []);

  // console.log("SortedInstructions: ", sortedInstructions)

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
              {sortedInstructions.map((instruction, index) =>

                timerArray[index] == 0 ? (
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
                ) : (
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
                )
              )}
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
