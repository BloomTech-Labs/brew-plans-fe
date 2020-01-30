import React from 'react';
import { View,  Text } from 'react-native';
import styles from '../styling/RecipeOverviewStyling';


const pourOver = props => {
    return (
    <View style={styles.contentBox}> 
    <Text style={styles.titleText}>You'll Need...</Text>
    <Text style={styles.lightText}>30 grams ground coffee</Text>
    <Text style={styles.lightText}>600 grams (20oz) water</Text>
    <Text style={styles.lightText}>1 paper filter</Text>
    <Text style={styles.lightText}>1 dripper</Text>
    <Text style={styles.lightText}>1 cup or carafe</Text>
    <Text style={styles.lightText}>1 kitchen scale</Text>
    <Text style={styles.lightText}>1 spoon</Text>
    <Text style={styles.lightText}>A kettle</Text>
                         
    </View>
    )
}

const aeroPress = props => {
    return (
        <View style={styles.contentBox}> 
        <Text style={styles.titleText}>You'll Need...</Text>
        <Text style={styles.lightText}>17 grams ground coffee</Text>
        <Text style={styles.lightText}>200 grams (7oz) water</Text>
        <Text style={styles.lightText}>An Aeropress coffee maker</Text>
        <Text style={styles.lightText}>1 paper filter</Text>
        <Text style={styles.lightText}>1 kitchen scale</Text>
        <Text style={styles.lightText}>1 spoon</Text>
        <Text style={styles.lightText}>A kettle</Text>
                             
        </View>
        )  
}

const mokaPot = props => {
    return (
        <View style={styles.contentBox}> 
        <Text style={styles.titleText}>You'll Need...</Text>
        <Text style={styles.lightText}>Ground coffee (amount depends on the size of your moka pot)</Text>
        <Text style={styles.lightText}>A Moka Pot coffee maker</Text>
        <Text style={styles.lightText}>Water (enough to fill the lower chamber of your moka pot)</Text>
        <Text style={styles.lightText}>1 spoon</Text>
        
                             
        </View>
        )  
}

const frenchPress = props => {
    return (
        <View style={styles.contentBox}> 
        <Text style={styles.titleText}>You'll Need...</Text>
        <Text style={styles.lightText}>A 1:12 coffee-to-water ratio (based on the size of your french press)</Text>
        <Text style={styles.lightText}>A French Press</Text>
        <Text style={styles.lightText}>1 kitchen scale</Text>
        <Text style={styles.lightText}>A bamboo paddle or chopstick</Text>
        <Text style={styles.lightText}>A kettle</Text>

        
                             
        </View>
        )  
}
export {pourOver, aeroPress, mokaPot, frenchPress};