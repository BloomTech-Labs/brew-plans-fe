import React from 'react';
import { Button, Text } from 'react-native-paper';


// this is the login button
const LandingButton = props => {
  console.log('landing button props', props);
  return (
    //  <Button
    //   style={{ marginTop: -20, marginLeft: -8, padding: 7, width: 280, backgroundColor: '#1F2233' }}
    //   mode='contained'
    //   // buttonBackground={'#1F2233'}
    //   title='Sign Up'
    //   onPress={() => props.navigation.navigate('SignUp')}
    //   //  onPress={()=> Alert.alert('test', 'sign up button')}
      
    // >
    //   <Text style={{ color: 'white', fontSize: 18 }}>Sign Up</Text>
    // </Button> 
    <Button
      // style={{ backgroundColor: props.buttonBackground, marginTop: 14,  width: 280, padding: 7 }}
      style={{ position: 'relative', top: -280, marginLeft: 17, padding: 7, width: 280, backgroundColor: '#1F2233' }}
      mode='contained'
      onPress={props.onPress}
      
    >
      <Text style={{ color: 'white', fontSize: 18 }}>Sign Up</Text>
    </Button>
  );
};

export default LandingButton;
