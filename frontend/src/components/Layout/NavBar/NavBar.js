import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import NavTabs from "./NavTabs";
import styles from "../../../styling/NavStyling";
import NavDrawer from "./NavDrawer";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <View style={styles.navbarContainer}>
      <StatusBar hidden={false} barStyle='dark-content' />
      <NavTabs toggleDrawer={() => {
        setIsOpen(!isOpen);
      }}/>
      <NavDrawer
        drawerOpen={isOpen}
        closeDrawer={() => setIsOpen(false)}
        {...props}
      />
    </View>
  );
};
export default NavBar;
