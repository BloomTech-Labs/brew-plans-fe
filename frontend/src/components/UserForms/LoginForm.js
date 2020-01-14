import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik } from 'formik';
import { withTheme, TextInput } from 'react-native-paper';
import { Akira } from 'react-native-textinput-effects';
import SocialButton from './SocialButton';
import Landing from '../../views/Landing';
import SubmitButton from './SubmitButton';
import { connect } from 'react-redux';
import { handleSignInChange, authSignIn } from '../../store/actions/index.js';
import * as firebase from 'firebase';

const LoginForm = props => {
  console.log('new login form:', props.onPress);
  const { theme, handleSignInChange, authSignIn, signInCredentials } = props;

  const passwordRef = useRef();

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
    <Formik>
      {props => (
        <View style={theme.formView}>
          {/* <View style={theme.formInputsContainer}> */}
          <View style={{width: 290}}>

          <Text style={{color: 'black', fontWeight: 'bold',  marginBottom: -20, marginLeft: 2}}>Email</Text>
            <Akira
              // style={theme.formInput}
              style={{ marginBottom: 15, width: 280}}
              // label={'...enter email'}
              // this is used as active and passive border color
              borderColor={'lightgray'}
              inputPadding={16}
              labelHeight={24}
              labelStyle={{ color: '#870c27' }}
              value={signInCredentials.email}
              textContentType={'emailAddress'}
              onChangeText={value => handleSignInChange('email', value)}
              autoCapitalize={'none'}
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
              // borderRadius={15}
              inputPadding={16}
              labelHeight={24}
              labelStyle={{ color: '#870c27' }}
              value={signInCredentials.password}
              onChangeText={value => handleSignInChange('password', value)}
              textContentType={'password'}
              secureTextEntry={true}
              returnKeyType='go'
              onSubmitEditing={() => authSignIn(signInCredentials)}
            />
          </View>
          
          {/* <SubmitButton 
            onPress={() => authSignIn(signInCredentials)}
            title='Login'
          /> */}

     <Button
      style={{ marginTop: -20, marginLeft: -8, marginBottom: 40,  padding: 7, width: 280, backgroundColor: '#1F2233' }}
      mode='contained'
      // onPress={props.onPress}
      onPress={() => authSignIn(signInCredentials)}
            title='Login'
    >
      <Text style={{fontSize: 18, color: 'white' }} >Login</Text>
    
    </Button>

    <Landing />

    {/* <Button
      style={{ marginTop: -20, marginLeft: -8, padding: 7, width: 280, backgroundColor: '#1F2233' }}
      mode='contained'
      // buttonBackground={'#1F2233'}
      title='Sign Up'
      onPress={() => props.navigation.navigate('SignUp')}
      //  onPress={()=> Alert.alert('test', 'sign up button')}
      
    >
      <Text style={{ color: 'white', fontSize: 18 }}>Sign Up</Text>
    </Button> */}
          
          <View style={theme.formSocialsContainer}>
          
          

            {/* <Text style={{ marginBottom: 8, fontSize: 16 }}>
              Login using social network
            </Text> */}
            <View style={theme.formIcons}>
            
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
    signInCredentials: {
      email: state.user.signInCredentials.email,
      password: state.user.signInCredentials.password
    }
  };
};

export default connect(
  mapStateToProps,
  {
    handleSignInChange,
    authSignIn
  }
)(withTheme(LoginForm));










// const LoginForm = props => {
//   const { theme, handleSignInChange, authSignIn, signInCredentials } = props;
//   const passwordRef = useRef();
//   const loginConfig = {
//     androidClientId:
//       '449923889220-pa3veecaq72o4tiairfrputrj7f0dp2n.apps.googleusercontent.com',
//     scopes: ['profile', 'email']
//   };
//   function userSignin(email, password) {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(() => {
//         props.navigation.replace('Dashboard');
//       })
//       .catch(error => {
//         Alert.alert(error.message);
//       });
//   }
//   return (
//     <Formik>
//       {props => (
//         <View style={theme.formView}>
//           <View style={theme.formInputsContainer}>
//             <Akira
//               style={theme.formInput}
//               label={'Email'}
//               // this is used as active and passive border color
//               borderColor={'lightgray'}
//               inputPadding={16}
//               labelHeight={24}
//               labelStyle={{ color: '#870c27' }}
//               value={signInCredentials.email}
//               textContentType={'emailAddress'}
//               onChangeText={value => handleSignInChange('email', value)}
//               autoCapitalize={'none'}
//               returnKeyType='next'
//               onSubmitEditing={() => passwordRef.current.focus()}
//             />
//             <Akira
//               style={theme.formInput}
//               label={'Password'}
//               ref={passwordRef}
//               // this is used as active and passive border color
//               borderColor={'lightgray'}
//               inputPadding={16}
//               labelHeight={24}
//               labelStyle={{ color: '#870c27' }}
//               value={signInCredentials.password}
//               onChangeText={value => handleSignInChange('password', value)}
//               textContentType={'password'}
//               secureTextEntry={true}
//               returnKeyType='go'
//               onSubmitEditing={() => authSignIn(signInCredentials)}
//             />
//           </View>
//           <SubmitButton
//             onPress={() => authSignIn(signInCredentials)}
//             title='Login'
//           />
//           <View style={theme.formSocialsContainer}>
//             <Text style={{ marginBottom: 8, fontSize: 16 }}>
//               Login using social network
//             </Text>
//             <View style={theme.formIcons}>
//               <SocialButton icon='logo-google' loginConfig={loginConfig} />
//               <SocialButton icon='logo-facebook' />
//             </View>
//           </View>
//         </View>
//       )}
//     </Formik>
//   );
// };
// const mapStateToProps = state => {
//   return {
//     signInCredentials: {
//       email: state.user.signInCredentials.email,
//       password: state.user.signInCredentials.password
//     }
//   };
// };
// export default connect(
//   mapStateToProps,
//   {
//     handleSignInChange,
//     authSignIn
//   }
// )(withTheme(LoginForm));











// import React, { useRef } from 'react';
// import { View, Text } from 'react-native';
// import { Formik } from 'formik';
// import { withTheme, TextInput } from 'react-native-paper';
// import { Akira } from 'react-native-textinput-effects';
// import SocialButton from './SocialButton';
// import SubmitButton from './SubmitButton';
// import { connect } from 'react-redux';
// import { handleSignInChange, authSignIn } from '../../store/actions/index.js';
// import * as firebase from 'firebase';
// import { bold } from 'ansi-colors';

// const LoginForm = props => {
//   const { theme, handleSignInChange, authSignIn, signInCredentials } = props;

//   const passwordRef = useRef();

//   const loginConfig = {
//     androidClientId:
//       '449923889220-pa3veecaq72o4tiairfrputrj7f0dp2n.apps.googleusercontent.com',
//     scopes: ['profile', 'email']
//   };

//   function userSignin(email, password) {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(() => {
//         props.navigation.replace('Dashboard');
//       })
//       .catch(error => {
//         Alert.alert(error.message);
//       });
//   }

  

//   return (
//     <Formik>
//       {props => (
//         <View style={theme.formView}>
//           {/* <View style={theme.formInputsContainer}> */}
//           <View style={{width: 290}}>

//           <Text style={{color: 'black', fontWeight: 'bold',  marginBottom: -20, marginLeft: 2}}>Email</Text>
//             <Akira
//               // style={theme.formInput}
//               style={{ marginBottom: 15, width: 280}}
//               // label={'...enter email'}
//               // this is used as active and passive border color
//               borderColor={'lightgray'}
//               inputPadding={16}
//               labelHeight={24}
//               labelStyle={{ color: '#870c27' }}
//               value={signInCredentials.email}
//               textContentType={'emailAddress'}
//               onChangeText={value => handleSignInChange('email', value)}
//               autoCapitalize={'none'}
//               returnKeyType='next'
//               onSubmitEditing={() => passwordRef.current.focus()}
//             />
//             <Text style={{color: 'black', fontWeight: 'bold',  marginBottom: -20, marginLeft: 2}}>Password</Text>
//             <Akira 
//               // style={theme.formInput}
//               style={{ marginBottom: 42, width: 280}}
//               // label={'Password'}
//               ref={passwordRef}
//               // this is used as active and passive border color
//               borderColor={'lightgray'}
//               // borderRadius={15}
//               inputPadding={16}
//               labelHeight={24}
//               labelStyle={{ color: '#870c27' }}
//               value={signInCredentials.password}
//               onChangeText={value => handleSignInChange('password', value)}
//               textContentType={'password'}
//               secureTextEntry={true}
//               returnKeyType='go'
//               onSubmitEditing={() => authSignIn(signInCredentials)}
//             />
//           </View>
          
//           <SubmitButton 
//             onPress={() => authSignIn(signInCredentials)}
//             title='Login'
//           />
          
//           <View style={theme.formSocialsContainer}>
          

//             {/* <Text style={{ marginBottom: 8, fontSize: 16 }}>
//               Login using social network
//             </Text> */}
//             <View style={theme.formIcons}>
//               <SocialButton loginConfig={loginConfig} />
//               {/* <SocialButton icon='logo-facebook' /> */}
//             </View>
//           </View>
//         </View>
//       )}
//     </Formik>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     signInCredentials: {
//       email: state.user.signInCredentials.email,
//       password: state.user.signInCredentials.password
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   {
//     handleSignInChange,
//     authSignIn
//   }
// )(withTheme(LoginForm));
