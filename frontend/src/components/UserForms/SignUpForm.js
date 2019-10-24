import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { withTheme } from 'react-native-paper';
import SocialButton from './SocialButton';
import SubmitButton from './SubmitButton';

import { handleUserSignup, handleChange } from '../../store/actions/index.js';

const SignUpForm = props => {
  // _storeData = async newUser => {
  //   try {
  //     await AsyncStorage.setItem(
  //       'user',
  //       JSON.stringify(newUser),
  //       (err, result) => {
  //         console.log('sign up result', result);
  //       }
  //     );
  //   } catch (error) {
  //     // Error saving data
  //     console.log(error);
  //   }
  // };

  // console.log('signupformprops: ', props)
  const loginConfig = {
    androidClientId:
      '449923889220-pa3veecaq72o4tiairfrputrj7f0dp2n.apps.googleusercontent.com',
    scopes: ['profile', 'email']
  };

  const { theme, newUser } = props;
  // console.log('newUser: ', newUser);

  const submitSignup = () => {
    // props.handleUserSignup(newUser);
    console.log('pressed button');
    _storeData(newUser);
  };

  const handleChange = (inputType, inputValue) => {
    props.handleChange(inputType, inputValue);
  };

  return (
    <Formik
      initialValues={{
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
      }}
    >
      {props => (
        <View style={theme.formView}>
          <View style={theme.formInputsContainer}>
            <TextInput
              style={theme.formInput}
              onChangeText={value => handleChange('username', value)}
              onBlur={props.handleBlur('username')}
              value={newUser.username}
              placeholder='Please enter username'
              label='Username'
              mode='outlined'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={value => handleChange('email', value)}
              onBlur={props.handleBlur('email')}
              value={newUser.email}
              placeholder='Please enter email'
              // label='Email'
              // mode='outlined'
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
          <SubmitButton onPress={() => submitSignup()} title='Sign Up' />
          <View style={theme.formSocialsContainer}>
            <Text
              style={{ marginBottom: 8, fontSize: 18, fontStyle: 'italic' }}
            >
              Sign up with
            </Text>
            <View style={theme.formIcons}>
              <SocialButton icon='zoom-in' loginConfig={loginConfig} />
              <SocialButton icon='book' />
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
      username: state.user.newUser.username,
      password: state.user.newUser.password,
      email: state.user.newUser.email
    }
  };
};

export default connect(
  mapStateToProps,
  {
    handleUserSignup,
    handleChange
  }
)(withTheme(SignUpForm));
