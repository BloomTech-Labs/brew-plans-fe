import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useKeepAwake } from 'expo-keep-awake';
import { View, ScrollView, Text, Image } from "react-native";

import Layout from "../components/Layout/Layout";
import styles from "../styling/SeededRecipesStyling";


const Overview = props => {
    useKeepAwake();
    const [sortedInstructions, setSortedInstructions] = useState([]);

    const [timerArray, setTimerArray] = useState([]);

    const { currentRecipe } = props;
    const { instructions } = currentRecipe;
  //captures strings starting with integers
    const regex = new RegExp(/^\d+/g);


    useEffect(() => {
    if (instructions) {
        const instructionsArray = instructions.split("////");
        let localTimerArray = [];
        let localInstructions = [];

        instructionsArray.map((instruction, index) => {
        let step = `Step ${index + 1}: `;

        const result = instruction.match(regex);

        if (result) {
            localTimerArray.push(parseInt(result[0]));
            instruction = instruction.substr(instruction.indexOf(" ") + 1);
        } else {
            localTimerArray.push(0);
        }

        let res = step.concat(instruction);
        localInstructions.push(res);
        });

        setSortedInstructions([...localInstructions]);
        setTimerArray([...localTimerArray]);
    }
    }, []);

    return (
    <View style={{ flex: 1, width: "100%" }}>
        {/* <Image
        source={require("../../assets/RecipeImage.png")}
        style={{ width: "101%", height: "20%", paddingTop: 24 }}
        /> */}
        <View style={{ width: '100%', zIndex: 150 }}>
            <Text style={{ paddingVertical: '3%', color: 'white', fontSize: 30, fontWeight: 'bold', textAlign: 'center', backgroundColor: '#1f2233' }}>{currentRecipe.title}</Text>
        </View>
        <Layout>
        <ScrollView>
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
                    style={{ borderBottomWidth: 0.8, borderBottomColor: "black" }}
                >
                <Text
                    style={{
                    marginVertical: 5,
                    backgroundColor: "white",
                    padding: 6,
                    fontSize: 16
                    }}
                    key={index}
                >
                    {instruction}
                </Text>
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

export default connect(mapStateToProps)(Overview);
