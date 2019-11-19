import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default AddTimer = props => {
  const [addDuration, setAddDuration] = useState(false);
  const { handleDurationChange, index, localInstructions } = props;
  console.log(
    'instruction duration in AddTimer',
    localInstructions[index].duration
  );
  return (
    <View>
      <MaterialIcons
        key={'MI' + index}
        name='timer'
        size={24}
        color='#720A13'
        onPress={() => setAddDuration(true)}
      />
      {addDuration || localInstructions[index].duration ? (
        <TextInput
          key={'D' + index}
          value={
            localInstructions[index].duration
              ? localInstructions[index].duration.toString()
              : ''
          }
          mode='outlined'
          onChangeText={value => handleDurationChange(index, value)}
        />
      ) : (
        <></>
      )}
    </View>
  );
};
