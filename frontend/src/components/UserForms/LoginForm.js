import React from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import { withTheme, TextInput } from 'react-native-paper';
import SocialButton from './SocialButton';
import SubmitButton from './SubmitButton';
import { connect } from 'react-redux';
import {
  handleSignInChange,
  authSignIn
} from '../../store/actions/index.js';

const LoginForm = props => {
  const theme = props.theme;
  const { 
    handleSignInChange, 
    authSignIn,
    signInCredentials 
  } = props;

  const loginConfig = {
    androidClientId:
      '449923889220-pa3veecaq72o4tiairfrputrj7f0dp2n.apps.googleusercontent.com',
    scopes: ['profile', 'email']
  };
  console.log(signInCredentials)

  return (
    <Formik>
      {props => (
        <View style={theme.formView}>
          <View style={theme.formInputsContainer}>
            <TextInput
              style={theme.formInput}
              onChangeText={(value) => handleSignInChange('email', value)}
              onBlur={props.handleBlur('email')}
              value={signInCredentials.email}
              label='Email'
              mode='outlined'
              placeholder='Please enter username'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={(value) => handleSignInChange('password', value)}
              onBlur={props.handleBlur('password')}
              value={signInCredentials.password}
              label='Password'
              mode='outlined'
              placeholder='Please enter password'
            />
          </View>
          <SubmitButton onPress={() => authSignIn(signInCredentials)} title='Login' />
          <View style={theme.formSocialsContainer}>
            <Text
              style={{ marginBottom: 8, fontSize: 18, fontStyle: 'italic' }}
            >
              Login with
            </Text>
            <View style={theme.formIcons}>
              <SocialButton icon='logo-google' loginConfig={loginConfig}/>
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
