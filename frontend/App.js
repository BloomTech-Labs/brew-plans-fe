import React, { Component } from 'react';
import { Text } from 'react-native-paper';
import { fromRight, fromLeft, zoomIn, zoomOut, fromBottom } from "react-navigation-transition-config";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { getLocalData } from './src/store/actions/asyncStorage.js';
import GreetingPage1 from './src/views/GreetingPages/GreetingPage1.js';
import GreetingPage2 from './src/views/GreetingPages/GreetingPage2.js';
import GreetingPage3 from './src/views/GreetingPages/GreetingPage3.js';
import GreetingPage4 from './src/views/GreetingPages/GreetingPage4.js';
import Landing from './src/views/Landing';
import SignUp from './src/views/SignUp';
import Login from './src/views/Login';
import Dashboard from './src/views/Dashboard.js';
import MyRecipes from './src/views/MyRecipes.js';
import RecipeForm from './src/views/RecipeForm.js';
import Recipe from './src/views/Recipe.js';
import * as firebase from 'firebase';
let initialRoute = '';

getLocalData('previouslyLoaded')
.then(res => {
  if (res == null) {
    console.log(initialRoute)
  } else {
    console.log(initialRoute)
  }
})
.catch(err => {
  console.log(err);
});

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
 
  // Custom transitions go there
  if (prevScene
    && prevScene.route.routeName === 'GreetingPage1'
    && nextScene.route.routeName === 'GreetingPage2'
    || nextScene.route.routeName === 'GreetingPage3'
    || nextScene.route.routeName === 'GreetingPage4') {
    return fromRight();
  }
  
  if(prevScene
    && prevScene.route.routeName === 'GreetingPage4'
    && nextScene.route.routeName === 'Landing') {
      return fromBottom();
    }

  if(prevScene
    && prevScene.route.routeName === 'Login' || 'Signup'
    && nextScene.route.routeName === 'Dashboard') {
      return zoomIn();
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
    GreetingPage1: {
      screen: GreetingPage1
    },
    GreetingPage2: {
      screen: GreetingPage2
    },
    GreetingPage3: {
      screen: GreetingPage3
    },
    GreetingPage4: {
      screen: GreetingPage4
    },
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
    transitionConfig: (nav) => handleCustomTransition(nav),
    defaultNavigationOptions: {
      header: null
    },
    initialRouteName: initialRoute
  }
);

export default createAppContainer(AppNavigator);
