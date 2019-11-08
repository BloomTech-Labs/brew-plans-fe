import React, { useState } from 'react';
import { View } from 'react-native';
import NavTabs from './NavTabs';
import styles from '../../../styling/NavStyling';
import NavDrawer from './NavDrawer';

const NavBar = props => {
  const [open, setOpen] = useState(false);
  return (
    <View sty style={styles.navbarContainer}>
      <NavTabs toggleDrawer={() => setOpen(!open)} {...props} />
      {open ? <NavDrawer {...props} /> : null}
    </View>
  );
};
export default NavBar;
