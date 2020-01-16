import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
// import LandingButton from '../Landing/LandingButton.js';
import { withTheme, Text } from 'react-native-paper';
import { NativeModulesProxy } from '@unimodules/core';

const OurButton = props => {
  console.log('submit button props', props);
  return (
    <View>
    <Button
      style={{ marginTop: -20, padding: 7, width: 280, backgroundColor: '#1F2233' }}
      mode='contained'
      onPress={props.onPress}
    >
      <Text style={{fontSize: 18, color: 'white' }} >{props.title}</Text>
    
      
    </Button>
    
    {/* this is the sign up button */}
    {/* <LandingButton 
          // buttonBackground={'#870c27'}
          buttonBackground={'#1F2233'}
          // buttonText={'white'}
          title='Sign Up'
          onPress={() => props.navigation.navigate('SignUp')}
        /> */}
    
    </View>
    
  );

  
};

export default OurButton;
