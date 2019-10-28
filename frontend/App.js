import React, { Component } from 'react';
import { Text } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Landing from './src/views/Landing';
import SignUp from './src/views/SignUp';
import Login from './src/views/Login';
import Dashboard from './src/views/Dashboard.js';
import MyRecipes from './src/views/MyRecipes.js';
import RecipeForm from './src/views/RecipeForm.js';

const AppNavigator = createStackNavigator(
  {
    Landing: {
      screen: MyRecipes
    },
    Dashboard: {
      screen: Dashboard
    },
    SignUp: {
      screen: SignUp
    },
    Login: {
      screen: Login
    },
    MyRecipes: {
      screen: MyRecipes
    },
    RecipeForm: {
      screen: RecipeForm
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);
