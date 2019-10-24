import * as React from 'react';
import { useState } from 'react';
import { Appbar, withTheme, Drawer } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import theme from '../../../theme.js';
import Layout from '../Layout';
import Login from '../../../views/Login';
import SignUp from '../../../views/SignUp';
// import NavDrawer from './NavDrawer';

const NavTabs = props => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Appbar style={{ width: '100%' }} theme={theme}>
        <Appbar.Action
          icon='person'
          onPress={() => props.navigation.navigate('MyRecipes')}
        />
        <Appbar.Action
          icon='home'
          onPress={() => props.navigation.navigate('Login')}
        />
        <Appbar.Action
          icon='work'
          onPress={() => props.navigation.navigate('RecipeForm')}
        />
        <Appbar.Action
          icon='menu'
          onPress={() => {
            setOpen(!open);
            console.log(open);
          }}
        />
      </Appbar>
      {/* {open ? <NavDrawer {...props} /> : null} */}
    </View>
  );
};

export default NavTabs;
