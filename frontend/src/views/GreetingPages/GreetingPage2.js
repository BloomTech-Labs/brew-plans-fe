import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GreetingStyles.js'

const GreetingPage2 = (props) => {
  return (
    <View style={{}}>
      <Text style={styles.title}>Greeting Page 2</Text>
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