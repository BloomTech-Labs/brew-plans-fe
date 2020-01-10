import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import { withTheme, TextInput } from 'react-native-paper';
import { Akira } from 'react-native-textinput-effects';
import SocialButton from './SocialButton';
import SubmitButton from './SubmitButton';
import { connect } from 'react-redux';
import { handleSignInChange, authSignIn } from '../../store/actions/index.js';
import * as firebase from 'firebase';
import { bold } from 'ansi-colors';

const LoginForm = props => {
  const { theme, handleSignInChange, authSignIn, signInCredentials } = props;

  const passwordRef = useRef();

  const loginConfig = {
    androidClientId:
      '449923889220-pa3veecaq72o4tiairfrputrj7f0dp2n.apps.googleusercontent.com',
    scopes: ['profile', 'email']
  };

  function userSignin(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.replace('Dashboard');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  }

  return (
    <Formik>
      {props => (
        <View style={theme.formView}>
          <View style={theme.formInputsContainer}>
          <Text style={{color: 'black', fontWeight: 'bold',  marginBottom: -20, marginLeft: -127}}>Email</Text>
            <Akira
              style={theme.formInput}
              // label={'Email'}
              // this is used as active and passive border color
              borderColor={'lightgray'}
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
            <Text style={{color: 'black', fontWeight: 'bold',  marginBottom: -20, marginLeft: -100}}>Password</Text>
            <Akira 
              style={theme.formInput}
              // label={'Password'}
              ref={passwordRef}
              // this is used as active and passive border color
              borderColor={'lightgray'}
              // borderRadius={15}
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
          
          <SubmitButton 
            onPress={() => authSignIn(signInCredentials)}
            title='Login'
          />
          
          <View style={theme.formSocialsContainer}>
          

            <Text style={{ marginBottom: 8, fontSize: 16 }}>
              Login using social network
            </Text>
            <View style={theme.formIcons}>
              <SocialButton icon='logo-google' loginConfig={loginConfig} />
              <SocialButton icon='logo-facebook' />
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
