import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { withTheme } from 'react-native-paper';
import SocialButton from './SocialButton';
import SubmitButton from './SubmitButton';
import * as firebase from 'firebase';
import { handleUserSignup, handleChange } from '../../store/actions/index.js';

const SignUpForm = props => {
  // console.log('signupformprops: ', props)
  const loginConfig = {
    androidClientId:
      '449923889220-pa3veecaq72o4tiairfrputrj7f0dp2n.apps.googleusercontent.com',
    scopes: ['profile', 'email']
  };

  const { theme, newUser } = props;
  const { authSignup } = props;
  // console.log('newUser: ', newUser);

  // const submitSignup = () => {
  //   // props.handleUserSignup(newUser);
  //   console.log('pressed button');
  //   _storeData(newUser);
  // };

  function submitSignup(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.replace('Dashboard');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  }

  const handleChange = (inputType, inputValue) => {
    props.handleChange(inputType, inputValue);
  };

  return (
    <Formik>
      {props => (
        <View style={theme.formView}>
          <View style={theme.formInputsContainer}>
            <TextInput
              style={theme.formInput}
              onChangeText={value => handleChange('email', value)}
              onBlur={props.handleBlur('email')}
              value={newUser.email}
              placeholder='Please enter email'
              label='Email'
              mode='outlined'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={value => handleChange('password', value)}
              onBlur={props.handleBlur('password')}
              value={newUser.password}
              placeholder='Please enter password'
              label='Password'
              mode='outlined'
            />
          </View>
          <SubmitButton onPress={() => authSignup(newUser)} title='Sign Up' />
          <View style={theme.formSocialsContainer}>
            <Text
              style={{ marginBottom: 8, fontSize: 18, fontStyle: 'italic' }}
            >
              Sign up with
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
    newUser: {
      password: state.user.newUser.password,
      email: state.user.newUser.email
    }
  };
};

export default connect(
  mapStateToProps,
  {
    handleChange,
    authSignup
  }
)(withTheme(SignUpForm));
