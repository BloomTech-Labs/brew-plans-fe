import React, { useRef } from 'react';
import { View, AsyncStorage } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { withTheme } from 'react-native-paper';
import SocialButton from './SocialButton';
import SubmitButton from './SubmitButton';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import { Akira } from 'react-native-textinput-effects';

import { handleChange, authSignup } from '../../store/actions/index.js';

const SignUpForm = props => {
  // console.log('signupformprops: ', props)
  const passwordRef = useRef();
  const loginConfig = {
    androidClientId:
      '449923889220-pa3veecaq72o4tiairfrputrj7f0dp2n.apps.googleusercontent.com',
    scopes: ['profile', 'email']
  };

  const { theme, newUser } = props;
  const { authSignup, handleChange } = props;

  return (
    <Formik>
      {props => (
        <View style={theme.formView}>
          {/* <View style={theme.formInputsContainer}> */}
          <View style={{width: 290}}>
            {/* <TextInput
              style={theme.formInput}
              onChangeText={value => handleChange('email', value)}
              onBlur={props.handleBlur('email')}
              value={newUser.email}
              placeholder='Please enter email'
              label='Email'
              mode='outlined'
            /> */}
            <Text style={{color: 'black', fontWeight: 'bold',  marginBottom: -20, marginLeft: 2}}>Email</Text>
            <Akira
              // style={theme.formInput}
              style={{ marginBottom: 15, width: 280}}
              // label={'Email'}
              // this is used as active and passive border color
              borderColor={'lightgray'}
              inputPadding={16}
              labelHeight={24}
              labelStyle={{ color: '#870c27' }}
              

              value={newUser.email}
              textContentType={'emailAddress'}
              onChangeText={value => handleChange('email', value)}
              autoCapitalize={'none'}
              keyboardType='email-address'
              returnKeyType='next'
              onSubmitEditing={() => passwordRef.current.focus()}
            />
            <Text style={{color: 'black', fontWeight: 'bold',  marginBottom: -20, marginLeft: 2}}>Password</Text>
            <Akira
              // style={theme.formInput}
              style={{ marginBottom: 42, width: 280}}
              // label={'Password'}
              ref={passwordRef}
              // this is used as active and passive border color
              borderColor={'lightgray'}
              inputPadding={16}
              labelHeight={24}
              labelStyle={{ color: '#870c27' }}
              value={newUser.password}
              textContentType={'password'}
              secureTextEntry={true}
              returnKeyType='go'
              onChangeText={value => handleChange('password', value)}
              onSubmitEditing={() => authSignup(newUser)}
            />
          </View>
          
          <View style={{marginLeft: -11, marginTop: 30}}>  
        <SubmitButton onPress={() => authSignup(newUser)} title='Sign Up' />
          </View>

          <View style={theme.formSocialsContainer}>
            
            
            <View style={{marginLeft: 90}}>
              <SocialButton loginConfig={loginConfig} />
              {/* <SocialButton icon='logo-facebook' /> */}
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
