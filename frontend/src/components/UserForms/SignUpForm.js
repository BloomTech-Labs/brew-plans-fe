import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { withTheme } from 'react-native-paper';
import SocialButton from './SocialButton';
import SubmitButton from './SubmitButton';

const SignUpForm = props => {
  const theme = props.theme;
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      onSubmit={values => console.log(values)}
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
              onChangeText={props.handleChange('username')}
              onBlur={props.handleBlur('username')}
              value={props.values.username}
              placeholder='Please enter username'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
              placeholder='Please enter email'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={props.handleChange('password')}
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
  return {
    user: {
      username: state.user.user.username,
      password: state.user.user.password,
      email: state.user.user.email
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHandleChange: (inputField, inputValue) =>
      dispatch(handleChange(inputField, inputValue)),
    onHandleSubmit: user => dispatch(handleSubmit(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(SignUpForm));
