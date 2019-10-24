import * as React from 'react';
// import { useState } from 'react'
import { Appbar, withTheme, Drawer } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme.js'
import Layout from './Layout'
import Login from '../../views/Login'

class AppBarNav extends React.Component {
  constructor(props) {
    super();
    const theme = props;
    this.state = {
      open: false
    }
  }
  render() {
    return (
      <View>
      <Appbar style={{ position: 'absolute', top: 0, left: 0, width: '100%' }} theme={theme}>
    
      <Appbar.Action icon="person" onPress={() => this.props.navigation.navigate('Login')} />
        <Appbar.Action icon="menu" onPress={() => {
          this.setState(state => {
            return { open: !state.open }
          })
          console.log(this.state.open);
        } 
        }/>
      </Appbar>
      {this.state.open ? <DrawerNav /> : null}
      </View>
    );
    }}

    class DrawerNav extends React.Component {
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

    const Navbar = props => {

      return (
        <View style={{width: '100%', height: '100%'}}>
          <AppBarNav {...props} />
        </View>
      );

    }

export default Navbar;