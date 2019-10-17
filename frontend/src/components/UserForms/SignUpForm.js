import React from 'react';
import { View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
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
        <View style={theme.formView}>
          <View style={theme.formInputsContainer}>
            <TextInput
              style={theme.formInput}
              onChangeText={props.handleChange('username')}
              onBlur={props.handleBlur('username')}
              value={props.values.username}
              label='Username'
              mode='outlined'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
              label='Email'
              mode='outlined'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              label='Password'
              mode='outlined'
            />
          </View>
          <SubmitButton onPress={props.handleSubmit} title='Sign Up' />
          <View style={theme.formSocialsContainer}>
            <Text
              style={{ marginBottom: 8, fontSize: 18, fontStyle: 'italic' }}
            >
              Sign up with
            </Text>
            <View style={theme.formIcons}>
              <SocialButton icon='zoom-in' />
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
