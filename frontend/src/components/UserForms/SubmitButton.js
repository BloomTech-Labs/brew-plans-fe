import * as React from 'react';
import { Button } from 'react-native-paper';
import { withTheme } from 'react-native-paper';

const OurButton = props => {
  return (
    <Button
      style={{ width: '50%', backgroundColor: '#ffa537' }}
      mode='contained'
      onPress={props.onPress}
    >
      {props.title}
    </Button>
  );
};

export default OurButton;
