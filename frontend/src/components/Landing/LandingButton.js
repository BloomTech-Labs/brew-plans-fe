import React from 'react';
import { Button } from 'react-native-paper';

const LandingButton = props => {
  return (
    <Button
      style={{ marginBottom: 32 }}
      mode='contained'
      onPress={props.onPress}
    >
      {props.title}
    </Button>
  );
};

export default LandingButton;
