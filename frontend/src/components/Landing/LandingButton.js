import React from 'react';
import { Button, Text } from 'react-native-paper';


// this is the login button
const LandingButton = props => {
  return (
    <Button
      style={{ backgroundColor: props.buttonBackground, marginTop: 14,  width: 280, padding: 7 }}
      mode='contained'
      onPress={props.onPress}
    >
      <Text style={{ color: props.buttonText, fontSize: 18 }}>{props.title}</Text>
    </Button>
  );
};

export default LandingButton;
