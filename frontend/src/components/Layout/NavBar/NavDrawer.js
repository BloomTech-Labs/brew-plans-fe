import * as React from "react";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { Drawer } from "react-native-paper";
import theme from "../../../theme.js";

const NavDrawer = props => {
  // const [open, setOpen] = useState('false')
  const [active, setActive] = useState("dashboard");

  return (
    <Animatable.View
      duration={200}
      transition="right"
      style={[styles.content, props.drawerOpen ? styles.open : styles.closed]}
    >
      <Drawer.Section
        theme={theme}
        style={{
          paddingVertical: 16
        }}
        // title='Some title'
      >
        <Drawer.Item
          label="Dashboard"
          active={active === "dashboard"}
          onPress={() => {
            setActive("dashboard");
            props.navigation.navigate("Dashboard");
          }}
          style={{
            marginVertical: 8
          }}
        />
        <Drawer.Item
          label="Recipes"
          active={active === "recipes"}
          onPress={() => {
            setActive("recipes");
            props.navigation.navigate("MyRecipes");
          }}
          style={{
            marginVertical: 8,
            paddingVertical: 4
          }}
        />
      </Drawer.Section>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  closed: {
    height: 460,
    width: "65%",
    position: "absolute",
    backgroundColor: "#e8e8e8",
    zIndex: 150,
    top: 80,
    right: "-65%"
  },
  open: {
    height: 460,
    width: "65%",
    position: "absolute",
    backgroundColor: "#e8e8e8",
    zIndex: 150,
    top: 80,
    right: 0
  }
});

export default NavDrawer;
