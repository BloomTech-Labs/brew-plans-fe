import React from 'react';
import { TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { withTheme } from 'react-native-paper';
import SocialButton from './SocialButton';
import SubmitButton from './SubmitButton';

import {
  handleUserSignup,
  handleChange,
} from '../../store/actions/index.js';

const SignUpForm = props => {
  const theme = props.theme;
  const newUser = props.newUser;
  // console.log(props);
  // console.log('newUser: ', newUser);

  const submitSignup = () => {
    props.handleUserSignup(newUser);
  }

  const handleChange = (inputType, inputValue) => {
    props.handleChange(inputType, inputValue);
  }

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
              onChangeText={(value) => handleChange('username', value)}
              onBlur={props.handleBlur('username')}
              value={newUser.username}
              placeholder='Please enter username'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={(value) => handleChange('email', value)}
              onBlur={props.handleBlur('email')}
              value={newUser.email}
              placeholder='Please enter email'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={(value) => handleChange('password', value)}
              onBlur={props.handleBlur('password')}
              value={newUser.password}
              placeholder='Please enter password'
            />
          </View>
          <SubmitButton onPress={() => submitSignup()} title='Sign Up' />
          <View style={theme.formSocialsContainer}>
            <SocialButton icon='book' />
            <SocialButton icon='book' />
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
    },
  };
};

export default connect(
  mapStateToProps,
  {
    handleUserSignup,
    handleChange
  }
)(withTheme(SignUpForm));
