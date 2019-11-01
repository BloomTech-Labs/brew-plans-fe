import React from 'react';
import { View, Text } from 'react-native';
import { storeLocalData, getLocalData } from '../store/actions/asyncStorage.js';

const GreetingView = props => {
  storeLocalData('previouslyLoaded', true)
  getLocalData('previouslyLoaded')
    .then(res => {
      console.log(res)
    })
  return (
    <View style={{ flex: 1 }}>
      <Text>Greeting View</Text>
    </View>
  );
};

export default GreetingView;