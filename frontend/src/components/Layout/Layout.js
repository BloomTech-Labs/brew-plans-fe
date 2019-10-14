import React from 'react';
import { View, Text } from 'react-native';
import Theme from './Theme';
import { ThemeProvider } from 'react-native-paper';

const Layout = () => {
  return (
    <Theme>
      <View style={{ flex: 1 }}></View>
    </Theme>
  );
};

export default Layout;
