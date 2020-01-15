import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

import styles from '../../styling/OverviewBarStyling';
import theme from '../../theme';

const OverviewBar = props => {
  return (
    <View>
      <Appbar style={styles.Appbox} theme={theme}>
        <View style={styles.viewBox}>
          <Text style={styles.overText}>Overview</Text>
          <Appbar.Action
            icon="close"
            color="white"
            // onPress={props.navigation.goBack()}
          />
        </View>
      </Appbar>
    </View>
  )
};

export default OverviewBar;