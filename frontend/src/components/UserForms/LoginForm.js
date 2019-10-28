import React from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import { withTheme, TextInput } from 'react-native-paper';
import SocialButton from './SocialButton';
import SubmitButton from './SubmitButton';

const LoginForm = props => {
  const theme = props.theme;

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
              label='Username'
              mode='outlined'
              placeholder='Please enter username'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              label='Password'
              mode='outlined'
              placeholder='Please enter password'
            />
          </View>
          <SubmitButton onPress={props.handleSubmit} title='Login' />
          <View style={theme.formSocialsContainer}>
            <Text
              style={{ marginBottom: 8, fontSize: 18, fontStyle: 'italic' }}
            >
              Login with
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

export default withTheme(LoginForm);
