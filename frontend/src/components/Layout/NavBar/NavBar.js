import React, { useState } from "react";
import { View } from "react-native";
import NavTabs from "./NavTabs";
import styles from "../../../styling/NavStyling";
import NavDrawer from "./NavDrawer";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View sty style={styles.navbarContainer}>
      <NavTabs toggleDrawer={() => setIsOpen(!isOpen)} {...props} />
      <NavDrawer drawerOpen={isOpen} {...props} />
    </View>
  );
};
export default NavBar;
