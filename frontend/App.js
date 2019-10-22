import React, { Component } from 'react';
import { Text } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Landing from './src/views/Landing';
import SignUp from './src/views/SignUp';
import Login from './src/views/Login';
import Dashboard from './src/views/Dashboard.js';
import MyRecipes from './src/views/MyRecipes.js';

const AppNavigator = createStackNavigator(
  {
    Landing: {
      screen: MyRecipes
    },
    SignUp: {
      screen: SignUp
    },
    Login: {
      screen: Login
    },
    Dashboard: {
      screen: Dashboard
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);
