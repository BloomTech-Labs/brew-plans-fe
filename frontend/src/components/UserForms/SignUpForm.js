import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { withTheme } from 'react-native-paper';
import SocialButton from './SocialButton';
import SubmitButton from './SubmitButton';

import {
  handleSubmit,
  handleChange
} from '../../store/actions/index.js'

const SignUpForm = props => {
  const theme = props.theme;
  const newUser = props.newUser;
  console.log(newUser)

  const handleSubmit = () => {
    props.onHandleSubmit();
  };

  const handleChange = (inputField, inputValue) => {
    props.onHandleChange(inputField, inputValue);
  };

  return (
    <Formik
      initialValues={{ 
        username: newUser.username, 
        email: newUser.email, 
        password: newUser.password 
      }}
      onSubmit={() => handleSubmit()}
    >
      {props => (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginBottom: 48
            }}
          >
            <TextInput
              style={theme.formInput}
              onChangeText={(value) => handleChange('username', value)}
              onBlur={props.handleBlur('username')}
              value={props.values.username}
              placeholder='Please enter username'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={(value) => handleChange('email', value)}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
              placeholder='Please enter email'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={(value) => handleChange('password', value)}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              placeholder='Please enter password'
            />
          </View>
          <SubmitButton onPress={props.handleSubmit} title='Sign Up' />
          <View
            style={{
              flexDirection: 'row',
              width: '50%',
              justifyContent: 'space-between',
              marginTop: 48
            }}
          >
            <SocialButton icon='book' />
            <SocialButton icon='book' />
          </View>
        </View>
      )}
    </Formik>
  );
};

const mapStateToProps = state => {
  console.log('mapStateToProps state:', state)
  return {
    newUser: {
      username: state.user.newUser.username,
      password: state.user.newUser.password,
      email: state.user.newUser.email
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHandleChange: (inputField, inputValue) =>
      dispatch(handleChange(inputField, inputValue)),
    onHandleSubmit: () => dispatch(handleSubmit())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(SignUpForm));
