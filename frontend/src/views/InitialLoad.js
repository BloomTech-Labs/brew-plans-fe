import React from 'react';
import { View, Image, Platform } from 'react-native';
import { getLocalData } from '../store/actions/asyncStorage.js';

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
            props.navigation.navigate('MyRecipes')
          }
        })
      })
    } else {
      // If the user clicked the log out button, they logged out from firebase and need to relogin so we navigate them to the landing screen to login again
      console.log('Trouble retrieving user from firebase')
      setTimeout(() => {
        props.navigation.navigate('Landing')
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