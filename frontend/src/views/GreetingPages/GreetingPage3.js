import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GreetingStyles.js'

const GreetingPage3 = (props) => {
  return (
    <View style={{}}>
      <Text style={styles.title}>Greeting Page 3</Text>
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