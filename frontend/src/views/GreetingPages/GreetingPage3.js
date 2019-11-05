import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './GreetingStyles.js'

const GreetingPage3 = (props) => {
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

      <Image style={styles.introImage} source={require('../../../assets/greetingpage3image.png')}/>

      <View style={styles.textContainer}>
        <Text style={styles.introText}>
          Upcoming Features will allow you to edit existing recipes, follow other coffee aficionados, share your creation and even rate other recipes.
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

export default GreetingPage3;