import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Drawer } from 'react-native-paper';
import theme from '../../../theme.js';
import { userLogout } from '../../../store/actions/user.js';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
const NavDrawer = props => {
  // const [active, setActive] = useState("dashboard");

  const [slideAnimation] = useState(new Animated.Value(300));

  if (props.drawerOpen) {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 800
    }).start();
  } else {
    Animated.timing(slideAnimation, {
      toValue: 300,
      duration: 800
    }).start();
  }

  return (
    <Animated.View style={{ ...styles.navDrawer, translateX: slideAnimation }}>
      <Drawer.Section
        theme={theme}
        style={{
          paddingVertical: 16
        }}
        // title='Some title'
      >
        <Drawer.Item
          label='Dashboard'
          active={props.navigation.state.routeName === 'Dashboard'}
          onPress={() => {
            // setActive("dashboard");
            props.navigation.navigate('Dashboard');
            props.closeDrawer();
          }}
          style={{
            marginVertical: 8
          }}
        />
        <Drawer.Item
          label='Recipes'
          active={props.navigation.state.routeName === 'MyRecipes'}
          onPress={() => {
            // setActive("recipes");
            props.navigation.navigate('MyRecipes');
            props.closeDrawer();
          }}
          style={{
            marginVertical: 8,
            paddingVertical: 4
          }}
        />
        <Drawer.Item
          label='Logout'
          onPress={() => {
            firebase.auth().signOut();
            props.userLogout();
            props.closeDrawer();
            props.navigation.navigate('Landing');
          }}
          style={{
            marginVertical: 8,
            paddingVertical: 4
          }}
        />
      </Drawer.Section>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  navDrawer: {
    height: 300,
    width: 300,
    position: 'absolute',
    backgroundColor: '#e8e8e8',
    zIndex: 150,
    top: 80,
    right: 0,
    borderBottomLeftRadius: 5
  }
});

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {
  userLogout
})(NavDrawer);
