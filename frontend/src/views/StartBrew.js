import React from 'react'
import { connect} from 'react-redux'
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
            <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flex: 1 }}>
                <Image
                source={require('../../assets/coffee-start.png')}
                />
                <Text style={{ fontSize: hp('5%'), fontWeight: 'bold' }}>Start Brewing</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("RecipeSteps")}>
                <Image
                
                source={require('../../assets/play-start.png')}
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
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
        color: 'white',
        padding: '5%'
    },
    overview: {
        backgroundColor: '#1f2233', 
        width: '100%', 
        bottom: 0, 
        justifyContent: 'space-between', 
        flexDirection: 'row'
    },
    recipeInfoText: {
        color: 'white',
        marginLeft: '2%',
        padding: '1%',
        fontSize: hp('2.5%')
    
    },
    recipeInfo: {
        width: '100%', 
        height: '12%', 
        backgroundColor: '#1f2233', 
        justifyContent: 'center',
    },
    recipeTitle: {
        fontSize: hp('4%'),
        alignSelf: 'center', 
        fontWeight: 'bold',
        marginVertical: 40,
    },
    mainView: {
        width: '100%',
        height: '100%',
        flex: 1,
    }
})


const mapStateToProps = state => {
    return {
        currentRecipe: state.user.currentRecipe
    };
}

export default connect(mapStateToProps)(StartBrew)


