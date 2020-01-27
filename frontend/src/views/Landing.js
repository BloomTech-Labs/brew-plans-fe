import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { getLocalData, storeLocalData } from '../store/actions/asyncStorage.js';
import { setUserInState, setTokenInState } from '../store/actions/index.js';
import * as firebase from 'firebase';

import LandingButton from '../components/Landing/LandingButton';
import Login from '../views/Login.js'

//LANDING SCREEN

const Landing = props => {
  const { loggedIn, setUserInState, setTokenInState } = props;

  useEffect(() => {
    storeLocalData('previouslyLoaded', true)
    getLocalData('user')
      .then(res => {
        if (res == null) {
        } else {
          setUserInState(res);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [loggedIn]);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      props.navigation.navigate('MyRecipes');
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then(res => {
          setTokenInState(res);
        })
        .catch(err => {
          alert(err);
        });
    } else {
      props.navigation.navigate('Landing');
    }
  });

  return (
    <>
      <Image
        style={{
          height: hp('20%'),
          width: wp('100%'),
          // marginBottom: 100
        }}
        source={require('../../assets/login-header.png')}
      /> 
    <View style={{
      flex: 1,
      width: wp('100%'),
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <View>
      <Login />
        <LandingButton
          buttonBackground={'#1F2233'}
          buttonText={'white'}
          title='Sign Up'
          onPress={() => props.navigation.navigate('SignUp')}
        />

      </View>
    </View>
    </>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.user.currentUser.loggedIn
  };
};

export default connect(
  mapStateToProps,
  {
    setUserInState,
    setTokenInState
  }
)(Landing);
