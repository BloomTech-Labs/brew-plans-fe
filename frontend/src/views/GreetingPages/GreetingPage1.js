import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GreetingStyles.js'

const GreetingPage1 = (props) => {
  return (
    <View style={{}}>
      <Text style={styles.title}>Greeting Page 1</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate('GreetingPage2')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GreetingPage1;