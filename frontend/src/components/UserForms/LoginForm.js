import React from 'react';
import { TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { withTheme } from 'react-native-paper';
import SocialButton from './SocialButton';
import SubmitButton from './SubmitButton';

const LoginForm = props => {
  const theme = props.theme;
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
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
              placeholder='Please enter username'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              placeholder='Please enter password'
            />
          </View>
          <SubmitButton onPress={props.handleSubmit} title='Login' />
          <View style={theme.formSocialsContainer}>
            <SocialButton icon='book' />
            <SocialButton icon='book' />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default withTheme(LoginForm);
