import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GreetingStyles.js'

const GreetingPage4 = (props) => {
  return (
    <View style={{}}>
      <Text style={styles.title}>Greeting Page 4</Text>
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