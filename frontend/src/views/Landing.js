import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import Layout from '../components/Layout/Layout';
import LandingButton from '../components/Landing/LandingButton';
import { connect } from 'react-redux';
import { getLocalData, storeLocalData } from '../store/actions/asyncStorage.js';
import { setUserInState, setTokenInState } from '../store/actions/index.js';
import * as firebase from 'firebase';

//LANDING SCREEN

const Landing = props => {
  const { loggedIn, setUserInState, setTokenInState } = props;

  useEffect(() => {
    // storeLocalData('previouslyLoaded', true)
    getLocalData('user')
      .then(res => {
        if (res == null) {
        } else {
          setUserInState(res);
          props.navigation.navigate('MyRecipes');
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
    <Layout custom={'white'}>
      <Image style={{ position: 'absolute', top: '5%', left: '5%' }} source={require('../../assets/BrewPlansLogo.png')}/>
      <Image style={{ borderRadius: 5, top: '10%' }} source={require('../../assets/IntroImage.png')}/>
      <View style={{ marginTop: '35%' }}>
        <LandingButton
          buttonBackground={'#870c27'}
          buttonText={'white'}
          title='Sign Up'
          onPress={() => props.navigation.navigate('SignUp')}
        />
        <LandingButton
          title='Login'
          buttonBackground={'white'}
          buttonText={'black'}
          onPress={() => props.navigation.navigate('Login')}
        />
      </View>
    </Layout>
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
