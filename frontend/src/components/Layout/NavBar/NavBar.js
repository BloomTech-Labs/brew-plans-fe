import * as React from 'react';
import { View } from 'react-native';
import NavTabs from './NavTabs';
import styles from '../../../styling/NavStyling';

const NavBar = props => {
  return (
    <View sty style={styles.navbarContainer}>
      <NavTabs {...props} />
    </View>
  );
};
export default NavBar;
