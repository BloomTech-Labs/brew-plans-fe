import * as React from 'react';
import { useState } from 'react';
import { Appbar, withTheme, Drawer } from 'react-native-paper';
import { StyleSheet, View, Image, Text } from 'react-native';
import theme from '../../../theme.js';
import { connect } from 'react-redux';
import Layout from '../Layout';
import { userLogout } from '../../../store/actions/user.js';
import * as firebase from 'firebase';
import styles from '../../../styling/NavStyling';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Svg } from 'expo';
import Logo from '../../../../assets/brewplans.svg';
import NavDrawer from './NavDrawer';

const NavTabs = props => {
  return (
    <View>
      <Appbar
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row'
        }}
        theme={theme}
      >
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 6,
            zIndex: 151,
          }}
        >
          <View>
          <Text style={{fontSize: 26, color: '#ffffff'}}>Brew Plans</Text>
          </View>
          <Appbar.Action
            icon='menu'
            color='white'
            onPress={props.toggleDrawer}git
          />
        </View>
      </Appbar>
    </View>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {
  userLogout
})(NavTabs);
