import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';



class FacebookLogin extends React.Component {
   constructor(props) {
    super(props)
   
}
    //logs user info in console
     componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
          if(user !=null) {
         console.log('Facebook Login:', user);
          }
        })
    }

    // async function logIn() {
    //     try {
    //       await Facebook.initializeAsync('<APP_ID>');
    //       const {
    //         type,
    //         token,
    //         expires,
    //         permissions,
    //         declinedPermissions,
    //       } = await Facebook.logInWithReadPermissionsAsync({
    //         permissions: ['public_profile'],
    //       });
    //       if (type === 'success') {
    //         // Get the user's name using Facebook's Graph API
    //         const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
    //         Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    //       } else {
    //         // type === 'cancel'
    //       }
    //     } catch ({ message }) {
    //       alert(`Facebook Login Error: ${message}`);
    //     }
    //   }

      
    async loginWithFacebook() {
        await Facebook.initializeAsync('1233121546879803');
        
        const { type, token } = await Facebook.logInWithReadPermissionsAsync( { permissions: ['public_profile'] })
    
        if (type == 'success') {
    
          const credential = firebase.auth.FacebookAuthProvider.credential(token)
    
          firebase.auth().signInWithCredential(credential).catch((error) => {
            console.log(error)
          })
        }
      }
     
 
    render() {
        return (
        <View>
  <TouchableOpacity onPress={() => this.loginWithFacebook()}>
    <Image style={{width: 280, height: 42, borderWidth: 2, borderColor:'#1F2233', marginLeft: -96}} source={require('../../../assets/facebook.png')}/>
    
    </TouchableOpacity>
        </View>
        )
    }
}
export default FacebookLogin;