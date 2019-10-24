import * as React from 'react';
import { View } from 'react-native';
import NavTabs from './NavTabs';

const NavBar = props => {
  return (
    <View style={{ width: '100%', paddingTop: 24 }}>
      <NavTabs {...props} />
    </View>
  );
};
export default NavBar;
