import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik } from 'formik';
import { withTheme, TextInput } from 'react-native-paper';
import { Akira } from 'react-native-textinput-effects';
import SocialButton from './SocialButton';
import { connect } from 'react-redux';
import { handleSignInChange, authSignIn } from '../../store/actions/index.js';
import * as firebase from 'firebase';

const LoginForm = props => {
  
  const { theme, handleSignInChange, authSignIn, signInCredentials } = props;
  

  const passwordRef = useRef();

  const loginConfig = {
    androidClientId:
      '449923889220-pa3veecaq72o4tiairfrputrj7f0dp2n.apps.googleusercontent.com',
    scopes: ['profile', 'email']
  };


  
  const facebookLoginConfig = async function() {
   const { type, token } = await Expo.Facebook.loginWithR
  }

  
  
  function userSignin(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.replace('MyRecipes');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  }

  

  return (
    <Formik>
      {props => (
        <View style={theme.formView}>
          <View style={{width: 290, marginTop: -47}}>

          <Text style={{color: 'black', fontWeight: 'bold',  marginBottom: -20, marginLeft: 2}}>Email</Text>
            <Akira
              style={{ marginBottom: 15, width: 280}}
              borderColor={'lightgray'}
              textAlign={'left'}
              inputPadding={16}
              labelHeight={24}
              labelStyle={{ color: '#870c27' }}
              value={signInCredentials.email}
              textContentType={'emailAddress'}
              onChangeText={value => handleSignInChange('email', value)}
              autoCapitalize={'none'}
              returnKeyType='next'
              onSubmitEditing={() => passwordRef.current.focus()}
            />
            <Text style={{color: 'black', fontWeight: 'bold',  marginBottom: -20, marginLeft: 2}}>Password</Text>
            <Akira
              style={{ marginBottom: 42, width: 280}}
              ref={passwordRef}
              // this is used as active and passive border color
              borderColor={'lightgray'}
              textAlign={'left'}
              inputPadding={16}
              labelHeight={24}
              labelStyle={{ color: '#870c27' }}
              value={signInCredentials.password}
              onChangeText={value => handleSignInChange('password', value)}
              textContentType={'password'}
              secureTextEntry={true}
              returnKeyType='go'
              onSubmitEditing={() => authSignIn(signInCredentials)}
            />
          </View>
      <Button
      style={{ marginTop: -20, marginLeft: -8, marginBottom: 40,  padding: 7, width: 280, backgroundColor: '#1F2233' }}
      mode='contained'
      onPress={() => authSignIn(signInCredentials)}
      title='Login'
      >
      <Text style={{fontSize: 18, color: 'white' }} >Login</Text>
      </Button>
          <View style={theme.formSocialsContainer}>
            <View style={theme.formIcons}>
              <SocialButton loginConfig={loginConfig} />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

const mapStateToProps = state => {
  return {
    signInCredentials: {
      email: state.user.signInCredentials.email,
      password: state.user.signInCredentials.password
    }
  };
};

export default connect(
  mapStateToProps,
  {
    handleSignInChange,
    authSignIn
  }
)(withTheme(LoginForm));




















