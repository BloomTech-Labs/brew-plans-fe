import React, { useEffect, useState } from 'react'
import { connect} from 'react-redux'

import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useKeepAwake } from 'expo-keep-awake';
import NavBar from "../components/Layout/NavBar/NavBar.js";


function RecipeSteps(props) {
    useKeepAwake();
    const { currentRecipe } = props;
    const { instructions } = currentRecipe;
    
    const [step, setStep] = useState(0);
    const [sortedInstructions, setSortedInstructions] = useState([]);
    const [timerArray, setTimerArray] = useState([]);


    const regex = new RegExp(/^\d+/g);


    useEffect(() => {
        console.log(step);
        if (instructions) {
            const instructionsArray = instructions.split("////");
            let localTimerArray = [];
            let localInstructions = [];
    
            instructionsArray.map((instruction, index) => {
            let step = '';
    
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
    }, [step]);
    
    
    return (
        <View style={ styles.mainView }>
            <NavBar {...props} />
            <Text style={ styles.recipeTitle }>{currentRecipe.title}</Text>
            <View style={{ justifyContent: 'space-around', alignItems: 'center', height: '33%' }}>
                <Image
                source={require('../../assets/kettle-outline1.png')}
                style={{ marginVertical: 10 }}
                />
            <Text style={{fontSize:18}}>{sortedInstructions[step]}</Text>
            </View>
            <View style={ styles.bottomContainer }>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1f2233' }}>
                    <TouchableOpacity onPress={() => {step === 0 ? props.navigation.navigate('StartBrew') : setStep(step-1)}}>
                    <Image
                        source={require('../../assets/previous.png')}
                        style={{ marginVertical: 10 }}
                        /> 
                        </TouchableOpacity>
                        <Text style={{color: 'white', fontSize:30, fontWeight: 'bold' }}>Step {step+1} </Text> 
                    <TouchableOpacity onPress={() => setStep(step+1)}>

                        <Image
                        source={require('../../assets/next.png')}
                        style={{ marginVertical: 10 }}
                        /> 
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1f2233' }}>
                    <Text style={ styles.overviewText }>Overview</Text>
                    <Text style={ styles.overviewText }>+</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    overviewText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        padding: '2%'
    },
    bottomContainer: { 
        width: '100%', 
        position: 'absolute', 
        bottom: 0, 
        justifyContent: 'space-between',
        height: '20%'
    },
    recipeTitle: {
        fontSize: 30, 
        alignSelf: 'center', 
        fontWeight: 'bold',
        marginTop: 30
    },
    mainView: {
        width: '100%',
        height: '100%'
    }
})


const mapStateToProps = state => {
    return {
        currentRecipe: state.user.currentRecipe
    };
}

export default connect(mapStateToProps)(RecipeSteps)
