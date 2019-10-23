import * as React from 'react';
// import { useState } from 'react'
import { Appbar, withTheme, Drawer } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import theme from '../../../theme.js'
import Layout from '../Layout'
import Login from '../../../views/Login'
import NavTabs from './NavTabs';
import NavDrawer from './NavDrawer';


    const Navbar = props => {

      return (
        <View style={{width: '100%', height: '100%'}}>
          <NavTabs {...props} />
        </View>
      );

    }

export default Navbar;