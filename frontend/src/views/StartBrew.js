import React from 'react'
import { connect} from 'react-redux'

import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useKeepAwake } from 'expo-keep-awake';
import NavBar from "../components/Layout/NavBar/NavBar.js";
import RecipeSteps from './RecipeSteps.js';

function StartBrew(props) {
    useKeepAwake();
    const { currentRecipe } = props;
    return (
    
        <View style={ styles.mainView }>
            <NavBar {...props} />
            {/* <Image
            source={require("../../assets/RecipeImage.png")}
            style={{ width: "100%", height: "20%" }}
            /> */}
            <Text style={ styles.recipeTitle }>{currentRecipe.title}</Text>
            <View style={ styles.recipeInfo }>
                <Text style={ styles.recipeInfoText }>Brew Type: {currentRecipe.brew_type}</Text>
                <Text style={ styles.recipeInfoText }>Water Temp: {currentRecipe.water_temp}&deg;F</Text>
            </View>
            <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Image
                source={require('../../assets/coffee-bean.png')}
                style={{ marginVertical: 10 }}
                />
                <Text style={{ fontSize: 30, marginVertical: 10, fontWeight: 'bold' }}>Start Brewing</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("RecipeSteps")}>
                <Image
                
                source={require('../../assets/play9.png')}
                style={{ marginTop: 10 }}
                />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Overview')}>
                <View style={ styles.overview }>
                    <Text style={ styles.overviewText }>Overview</Text>
                    <Text style={ styles.overviewText }>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    overviewText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    overview: {
        backgroundColor: '#1f2233', 
        width: '100%', 
        bottom: 0, 
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        padding: '2%'
    },
    recipeInfoText: {
        color: 'white',
        fontSize: 20
    },
    recipeInfo: {
        width: '100%', 
        height: '12%', 
        backgroundColor: '#1f2233', 
        justifyContent: 'center'
    },
    recipeTitle: {
        fontSize: 30, 
        alignSelf: 'center', 
        fontWeight: 'bold'
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

export default connect(mapStateToProps)(StartBrew)


