import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './GreetingStyles.js'

const GreetingPage2 = (props) => {
  return (
    <View style={styles.pageContainer}>

      <View style={styles.header}>
        <Image style={styles.bpLogo} source={require('../../../assets/new-logo.png')}/>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Landing')}
          style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.introImage2} source={require('../../../assets/greeting2-image.png')}/>

      <View style={styles.textContainer}>
        <Text style={styles.introText}>
          Welcome to Brew Plans. {"\n"}
          Where you can search through brewing recipes, and log your own creations.
        </Text>
      </View>


      <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate('Landing')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GreetingPage2;