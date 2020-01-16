import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useKeepAwake } from 'expo-keep-awake';

import NavBar from "../components/Layout/NavBar/NavBar.js";
import images from '../../assets/images'
import Timer from "../components/timer";


function RecipeSteps(props) {
    useKeepAwake();
    const { currentRecipe } = props;
    const { instructions } = currentRecipe;
    
    const [stepNumber, setStepNumber] = useState(0);
    const [nextDisabled, setNextDisabled] = useState(false);
    const [currentIcon, setCurrentIcon] = useState(images.default.source);

    const [sortedInstructions, setSortedInstructions] = useState([]);
    const [timerArray, setTimerArray] = useState([]);

    const regex = new RegExp(/^\d+/g);


    useEffect(() => {
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
    if(sortedInstructions[0]) {
        if(sortedInstructions[stepNumber].toLowerCase().includes('boil')) {
            setCurrentIcon(images.boil.source)
        } else if (sortedInstructions[stepNumber].toLowerCase().includes('filter')) {
            setCurrentIcon(images.filter.source)
        } else if (sortedInstructions[stepNumber].toLowerCase().includes('pour')) {
            setCurrentIcon(images.pouring.source)
        } else if (sortedInstructions.length - 1 === stepNumber) {
            setCurrentIcon(images.coffeeCup.source)
        } else if (sortedInstructions[stepNumber].toLowerCase().includes('brew')) {
            setCurrentIcon(images.coffeeMaker.source)
        } else {
            setCurrentIcon(images.default.source)
        }
    }
}, [stepNumber, sortedInstructions.length]);
    return (
        <View style={ styles.mainView }>
            <NavBar {...props} />
            <Text style={ styles.recipeTitle }>{currentRecipe.title}</Text>
            <View style={ styles.instructionsContainer }>
                <Image
                source={ currentIcon }
                style={{ marginVertical: 10, width: 200, height: 200 }}
                />
                <Text style={ styles.instructions }>{sortedInstructions[stepNumber]}</Text>
                {timerArray[stepNumber] ? ( <Timer stepLength={timerArray[stepNumber]} /> ) : (null)}                 
            </View>
            <View style={ styles.bottomContainer }>
                <View style={ styles.stepContainer }>
                    <TouchableOpacity onPress={() => {
                        if(stepNumber === 0) {
                            props.navigation.navigate('StartBrew')
                        } else if (stepNumber === sortedInstructions.length -1) {
                            setStepNumber(stepNumber - 1)
                            setNextDisabled(false)
                        } else {
                            setStepNumber(stepNumber - 1)
                        }
                    }}>
                    <Image
                        source={require('../../assets/previous.png')}
                        style={{ marginVertical: 10 }}
                        /> 
                        </TouchableOpacity>
                        <Text style={ styles.step }>Step {stepNumber+1} </Text> 
                    <TouchableOpacity disabled={nextDisabled} onPress={() => stepNumber === sortedInstructions.length - 1 ? setNextDisabled(true) : setStepNumber(stepNumber+1)
                    }>
                        <Image
                        source={require('../../assets/next.png')}
                        style={{ marginVertical: 10 }}
                        /> 
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Overview')}>
                    <View style={ styles.overviewContainer }>
                        <Text style={ styles.overviewText }>Overview</Text>
                        <Text style={ styles.overviewText }>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    overviewText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        padding: '4%'
    },
    overviewContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: '#1f2233'
    },
    bottomContainer: { 
        width: '100%', 
        position: 'absolute', 
        bottom: 0, 
        justifyContent: 'space-between',
        height: '16.5%'
    },
    recipeTitle: {
        fontSize: 30, 
        alignSelf: 'center', 
        fontWeight: 'bold',
        marginVertical: 30,
        paddingBottom: '2%',
        borderBottomWidth: 2,
        borderBottomColor: '#C4C4C4'
    },
    mainView: {
        width: '100%',
        height: '100%'
    },
    step: {
        color: 'white', 
        fontSize:30, 
        fontWeight: 'bold'
    },
    stepContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: '#1f2233'
    },
    instructions: { 
        fontSize:21, 
        textAlign: 'center', 
        width: '81%',
        paddingTop: 40
    },
    instructionsContainer: {
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: '33%'
    }
})


const mapStateToProps = state => {
    return {
        currentRecipe: state.user.currentRecipe
    };
}

export default connect(mapStateToProps)(RecipeSteps)
