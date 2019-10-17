import React from 'react';
import { View, Text } from 'react-native';
import Theme from './Theme';
import Navbar from './Navbar';

// Layout
const Layout = props => {
  return (
    <Theme>
      <View
        style={{
          flex: 1,
          padding: 16,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ece6cf'
        }}
      >
        {props.children}
      </View>
    </Theme>
  );
};

export default Layout;
