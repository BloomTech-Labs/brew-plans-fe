import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './GreetingStyles.js'

const GreetingPage4 = (props) => {
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

      <Image style={styles.introImage} source={require('../../../assets/greetingpage4image.png')}/>

      <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate('Landing')}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>

    </View>
  );
};

export default GreetingPage4;