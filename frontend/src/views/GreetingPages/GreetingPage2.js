import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './GreetingStyles.js'

const GreetingPage2 = (props) => {
  return (
    <View style={styles.pageContainer}>

      <View style={styles.header}>
        <Image style={styles.bpLogo} source={require('../../../assets/BrewPlansLogo.png')}/>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Landing')}
          style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.introImage} source={require('../../../assets/greetingpage2image.png')}/>

      <View style={styles.textContainer}>
        <Text style={styles.introText}>
          Welcome to Brew Plans. {"\n"}
          Where you can search through brewing recipes, and log you're own creations.
        </Text>
      </View>


      <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate('GreetingPage3')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GreetingPage2;