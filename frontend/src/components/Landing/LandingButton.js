import React from 'react';
import { Button, Text } from 'react-native-paper';

const LandingButton = props => {
  return (
    <Button
      style={{ backgroundColor: props.buttonBackground, marginVertical: 10, width: 200 }}
      mode='contained'
      onPress={props.onPress}
    >
      <Text style={{ color: props.buttonText, fontSize: 28 }}>{props.title}</Text>
    </Button>
  );
};

export default LandingButton;
