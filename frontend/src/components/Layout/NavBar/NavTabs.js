import * as React from 'react';
import { useState } from 'react';
import { Appbar, withTheme, Drawer } from 'react-native-paper';
import { StyleSheet, View, Image } from 'react-native';
import theme from '../../../theme.js';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { userLogout } from '../../../store/actions/user.js';
import * as firebase from 'firebase';
// import NavDrawer from './NavDrawer';

const NavTabs = props => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Appbar style={{ width: '100%' }} theme={theme}>
        <Image source= {require("../../../../assets/BrewPlansLogo.png")} />
          
          <Appbar.Action
          icon='home'
          onPress={() => props.navigation.navigate('Dashboard')}
        /> 
        <Appbar.Action
          icon='person'
          onPress={() => props.navigation.navigate('MyRecipes')}
        />
       
        <Appbar.Action
          icon='work'
          onPress={() => {
            firebase.auth().signOut();
            props.userLogout();
            props.navigation.navigate('Landing');
          }}
        />
        {/* <Appbar.Action
          icon='menu'
          onPress={() => {
            setOpen(!open);
            console.log(open);
          }}
        /> */}
      </Appbar>
      {/* {open ? <NavDrawer {...props} /> : null} */}
    </View>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {
    userLogout
  }
)(NavTabs);
