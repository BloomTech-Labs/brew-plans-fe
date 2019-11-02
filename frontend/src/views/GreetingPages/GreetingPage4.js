import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GreetingStyles.js'

const GreetingPage4 = (props) => {
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
      onPress={() => props.navigation.navigate('Landing')}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GreetingPage4;