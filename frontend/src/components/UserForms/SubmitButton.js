import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import LandingButton from '../Landing/LandingButton.js';
import { withTheme, Text } from 'react-native-paper';
import { NativeModulesProxy } from '@unimodules/core';

const OurButton = props => {
  return (
    <View>
    <Button
      style={{ marginTop: -20, padding: 7, width: 169, backgroundColor: '#1F2233' }}
      mode='contained'
      onPress={props.onPress}
    >
      <Text style={{fontSize: 18, color: 'white' }} >{props.title}</Text>
    
      
    </Button>
    
    <LandingButton 
          // buttonBackground={'#870c27'}
          buttonBackground={'#1F2233'}
          // buttonText={'white'}
          title='Sign Up'
          onPress={() => props.navigation.navigate('SignUp')}
        />
    
    </View>
    
  );

  
};

export default OurButton;
