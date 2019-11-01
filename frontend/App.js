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
import Recipe from './src/views/Recipe.js';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDZKLP2FGiOx0aMXeDjAc3MOWSQa9pvJQg',
  authDomain: 'brew-plans.firebaseapp.com',
  databaseURL: 'https://brew-plans.firebaseio.com',
  projectId: 'brew-plans',
  storageBucket: 'brew-plans.appspot.com',
  messagingSenderId: '449923889220',
  appId: '1:449923889220:web:61af8a8355e54b3fba2411',
  measurementId: 'G-01P13B1Q2M'
};

firebase.initializeApp(firebaseConfig);

const AppNavigator = createStackNavigator(
  {
    Landing: {
      screen: Landing
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
    },
    Recipe: {
      screen: Recipe
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);
