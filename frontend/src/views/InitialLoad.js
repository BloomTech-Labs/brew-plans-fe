import React from 'react';
import { View, Image, Platform } from 'react-native';
import { getLocalData, storeLocalData } from '../store/actions/asyncStorage.js';


import * as firebase from 'firebase';
import { setUserInState, setTokenInState } from '../store/actions/index.js';
import { connect } from 'react-redux';

const InitialLoad = (props) => {

  // Checks if the user has previously signed in
  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      // If they have logged in before, we get their token
      firebase.auth().currentUser.getIdToken(true)
      .then(res => {
        // Since we know they logged in before we know they have localData set on the phone
        getLocalData('user')
        .then(response => {
          if(response === null) {
          } else {
            // if response isn't null, which it should never be, we set the token in state and set user in state so they are logged in and can view (make requests to the server) their recipes based off of localData.user.token and then navigate to the MyRecipes screen
            props.setTokenInState(res);
            props.setUserInState(response);
            storeLocalData('previouslyLoaded', true);
            props.navigation.navigate('MyRecipes');
          }
        })
      })
    } else {
      // If the user clicked the log out button, they logged out from firebase and need to relogin so we navigate them to the landing screen to login again
      console.log('Trouble retrieving user from firebase')
      // If they never launched the app firebase wont find the user so we check for previouslyLoaded in storage and if that's not available we show them the greeting pages
      getLocalData('previouslyLoaded')
      .then(res => {
        if(res == true) {
          // If previouslyLoaded is in storage we know they launched the app before and navigate them to the landing screen
          setTimeout(() => {
            props.navigation.navigate('Landing')
          })
        } else {
          setTimeout(() => props.navigation.navigate('GreetingPage1'), 1500)
        }
      })
    }
  })

  return (
    <View style={{ flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: 'white' }}>
      <Image 
      source={require('../../assets/BrewPlansLogo.png')} 
      style={{ alignSelf: 'center', width: 100, height: 100, resizeMode: 'contain' }}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { setUserInState, setTokenInState })(InitialLoad);