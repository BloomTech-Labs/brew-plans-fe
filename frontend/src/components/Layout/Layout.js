import React from 'react';
import { View, Text } from 'react-native';
import Theme from './Theme';
import BottomNav from './BottomNav';

// Layout
const Layout = props => {
  return (
    <Theme>
      <View
        style={{
          flex: 1,
          padding: 32,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {props.children}
      </View>
    </Theme>
  );
};

export default Layout;
