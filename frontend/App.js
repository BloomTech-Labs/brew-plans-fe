import React, { Component } from 'react';
import { Text } from 'react-native-paper';
import { fadeIn, fromRight, fromLeft, zoomIn, zoomOut, fromBottom, flipX, flipY, fromTop } from "react-navigation-transition-config";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import InitialLoad from './src/views/InitialLoad.js';
import GreetingPage1 from './src/views/GreetingPages/GreetingPage1.js';
import GreetingPage2 from './src/views/GreetingPages/GreetingPage2.js';
import GreetingPage3 from './src/views/GreetingPages/GreetingPage3.js';
import Landing from './src/views/Landing';
import SignUp from './src/views/SignUp';
import Login from './src/views/Login';
import Dashboard from './src/views/Dashboard.js';
import MyRecipes from './src/views/MyRecipes.js';
import RecipeForm from './src/views/RecipeForm.js';
import Recipe from './src/views/Recipe.js';
import * as firebase from 'firebase';


const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
 
  // Custom transitions go there
  if (prevScene
    && prevScene.route.routeName === 'GreetingPage1'
    && nextScene.route.routeName === 'GreetingPage2'
    || nextScene.route.routeName === 'GreetingPage3') {
    return fromRight(700);
  }
  
  if(prevScene
    && prevScene.route.routeName === 'GreetingPage4'
    && nextScene.route.routeName === 'Landing') {
      return fromBottom();
    }

  if(prevScene
    && prevScene.route.routeName === 'Login' || 'Signup'
    && nextScene.route.routeName === 'Dashboard') {
      return fromTop(700);
    }

  if(prevScene
    && prevScene.route.routeName === 'Landing'
    && nextScene.route.routeName === 'Login' || 'SignUp') {
      return fromRight(500)
    }

  if(prevScene
    && nextScene.route.routeName === 'Dashboard' || 'MyRecipes') {
      return fadeIn(500)
    }

  if(prevScene
    && prevScene.route.routeName === 'InitialLoad'
    && nextScene.route.routeName === 'Landing') {
      return fadeIn(1000)
    }

  
}



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
    InitialLoad: {
      screen: InitialLoad
    },
    GreetingPage1: {
      screen: GreetingPage1
    },
    GreetingPage2: {
      screen: GreetingPage2
    },
    GreetingPage3: {
      screen: GreetingPage3
    },
    Landing: {
      screen: Landing
    },
    MyRecipes: {
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
   
    RecipeForm: {
      screen: RecipeForm
    },
    Recipe: {
      screen: Recipe
    }
  },
  {
    transitionConfig: (nav) => handleCustomTransition(nav),
    defaultNavigationOptions: {
      header: null
    },
  }
);

export default createAppContainer(AppNavigator);
