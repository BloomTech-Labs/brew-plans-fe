import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { withTheme } from 'react-native-paper';

const SignUpForm = props => {
  const theme = props.theme;
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      onSubmit={values => console.log(values)}
    >
      {props => (
        <View>
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
          <Button onPress={props.handleSubmit} title='Submit' />
        </View>
      )}
    </Formik>
  );
};

export default withTheme(SignUpForm);
