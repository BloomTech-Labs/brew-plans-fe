import * as React from 'react';
import { Button } from 'react-native-paper';
import { withTheme } from 'react-native-paper';

export default IngredientButton = props => {
    const theme = props.theme;
    return (
      <Button style={{ width: '50%' }} mode='contained' onPress={props.onPress}>
        {props.title}
      </Button>
    );
  };

  export const DeleteIngredientButton = props => {
    const theme = props.theme;
    return (
      <Button style={{ width: '50%' }} mode='contained' onPress={props.onPress}>
        {props.id}
      </Button>
    );
  };
    

