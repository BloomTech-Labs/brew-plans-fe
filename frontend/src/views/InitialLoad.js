import React from 'react';
import { View, Image } from 'react-native';
import { getLocalData } from '../store/actions/asyncStorage.js';
import { setUserInState } from '../store/actions/index.js';
import { connect } from 'react-redux';

const InitialLoad = (props) => {
  const { setUserInState } = props;

  getLocalData('previouslyLoaded')
    .then(res => {
      if (res == true) {
        getLocalData('user')
        .then(res => { 
          if(res !== null) {
            setUserInState(res);
            setTimeout(() => props.navigation.navigate('Dashboard'), 2000)
          } else {
            setTimeout(() => props.navigation.navigate('Landing'), 2000)
          }
        })
      } else {
        setTimeout(() => props.navigation.navigate('GreetingPage1'), 1500)
      }
    })
    .catch(err => {
      console.log(err)
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
  return {

  };
};

export default connect(
  mapStateToProps,
  {
    setUserInState
  }
)(InitialLoad);