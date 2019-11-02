import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GreetingStyles.js'

const GreetingPage3 = (props) => {
  return (
    <View style={{}}>

<View style={styles.header}>
      <Text style={styles.title}>Brew {"\n"}Plans</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Landing')}
        style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate('GreetingPage4')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GreetingPage3;