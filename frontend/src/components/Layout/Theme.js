import React from 'react';
import { View, Text } from 'react-native';
import { Provider as ThemeProvider } from 'react-native-paper';
import theme from '../../theme';

const Theme = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
