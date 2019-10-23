
    import * as React from 'react';
    // import { useState } from 'react'
    import { Appbar, withTheme, Drawer } from 'react-native-paper';
    import { StyleSheet, View } from 'react-native';
    import theme from '../../../theme.js'
    import Layout from '../Layout'
    import Login from '../../../views/Login'
    import NavTabs from './NavTabs';
    import NavBar from './/Navbar';
    
    class NavDrawer extends React.Component {
        state = {
          active: 'first',
        };
      
        render() {
          const { active } = this.state;
      
          return (
            <Drawer.Section title="Some title">
              <Drawer.Item
                label="First Item"
                active={active === 'first'}
                onPress={() => { this.setState({ active: 'first' }); }}
              />
              <Drawer.Item
                label="Second Item"
                active={active === 'second'}
                onPress={() => { this.setState({ active: 'second' }); }}
              />
           </Drawer.Section>
          );
        }
      }

      export default NavDrawer;