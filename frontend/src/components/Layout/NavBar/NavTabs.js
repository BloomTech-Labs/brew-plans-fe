import * as React from 'react';
import { useState } from 'react';
import { Appbar, withTheme, Drawer } from 'react-native-paper';
import { StyleSheet, View, Image } from 'react-native';
import theme from '../../../theme.js';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { userLogout } from '../../../store/actions/user.js';
import * as firebase from 'firebase';
import styles from '../../../styling/NavStyling';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import image from '../../../../assets/BrewPlansLogo.png';
import NavDrawer from './NavDrawer';

const NavTabs = props => {
  return (
    <View>
      <Appbar
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        theme={theme}
      >
        <Image
          style={{ resizeMode: 'contain', height: '95%' }}
          source={require('../../../../assets/BrewPlansLogo.png')}
        />

        <View style={{ flexDirection: 'row' }}>
          {/* <Appbar.Action
            icon='home'
            onPress={() => props.navigation.navigate('Dashboard')}
            color={'white'}
          />

          <Appbar.Action
            icon={require('../../../../assets/coffee.png')}
            onPress={() => props.navigation.navigate('MyRecipes')}
            color='white'
          />

          <Appbar.Action
            onPress={() => {
              firebase.auth().signOut();
              props.userLogout();
              props.navigation.navigate('Landing');
            }}
            color='white'
            icon='work'
          /> */}
          <Appbar.Action
            icon='menu'
            color='white'

            onPress={props.toggleDrawer}

          />
        </View>
      </Appbar>
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
