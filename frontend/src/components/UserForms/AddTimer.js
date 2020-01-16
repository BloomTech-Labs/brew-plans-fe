import React, { useState, useRef } from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../theme';

export default AddTimer = props => {
  const timerRef = useRef();
  const [addDuration, setAddDuration] = useState(false);
  const { handleDurationChange, index, localInstructions } = props;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <MaterialIcons
        key={'MI' + index}
        name='timer'
        size={24}
        color='#720A13'
        onPress={() => { 
          setAddDuration(true)
          setTimeout(() => {
            timerRef.current.focus();
          }, 150)
        }}
      />
      {addDuration || localInstructions[index].duration ? (
        <View>
          <TextInput
            ref={timerRef}
            keyboardType="number-pad"
            key={'D' + index}
            value={
              localInstructions[index].duration
                ? localInstructions[index].duration.toString()
                : ''
            }
            mode='outlined'
            onChangeText={value => handleDurationChange(index, value)}
            theme={theme}
            placeholder='Add duration in seconds'
            style={{
              marginHorizontal: 16,
              marginVertical: 8,
              width: '90%',
              fontSize: 3
            }}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};
