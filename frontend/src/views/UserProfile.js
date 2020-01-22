import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { bold } from 'ansi-colors';
import { TouchableOpacity } from 'react-native-gesture-handler';



const UserProfile = props => {

const [name, setName] = React.useState('')
const [email, setEmail] = React.useState('')
const [bio, setBio] = React.useState('')

return (
  <View>
 
 <Image style={{top: '5%',height: '10%',width: '115%',marginTop: 12}} source={require('../../assets/profile-header.png')}/>
 
 <TouchableOpacity onPress={() => props.navigation.navigate('MyRecipes')}>
 <Image  style={{position: 'relative', top: -15.5, height: 47, marginLeft: 350}} source={require('../../assets/close-icon.png')}/>
 

 </TouchableOpacity>
 
 <Image style={{marginTop: 85, marginLeft: 130}} source={require('../../assets/upload-img.png')}/>
 

 
 
 {/* <Text style={{fontWeight: 'bold', position: 'relative', top: 65 }}>Name</Text> */}
  <View style={{marginTop: 30}}>
 <TextInput style={{height: 50, marginTop: 40, marginBottom: 20, marginLeft: 20, borderColor: '#E7E8E8', backgroundColor: '#E7E8E8', borderWidth: 1, width: '90%'}}
  onChangeText={text => setName(text)}
  value={name}
  inputPadding={56}
  autoCapitalize={'none'}
 /> 
 


<TextInput style={{height: 50, marginBottom: 20, marginLeft: 20, borderColor: '#E7E8E8', backgroundColor: '#E7E8E8', borderWidth: 1, width: '90%'}}
  onChangeText={text => setEmail(text)}
  value={email}
  autoCapitalize={'none'}
 />

<TextInput style={{height: 50, marginLeft: 20, borderColor: '#E7E8E8', backgroundColor: '#E7E8E8', borderWidth: 1, width: '90%'}}
  onChangeText={text => setBio(text)}
  value={bio}
  autoCapitalize={'none'}
 />

{/* My recipes button */}
<Button style={{ marginTop: 50, marginLeft: 20, padding: 7, width: '90%', backgroundColor: '#1F2233' }} 
      onPress={() => props.navigation.navigate('MyRecipes')}><Text style={{color:'white', fontSize: 20}}>My Recipes</Text></Button>
      </View>
  </View>

    )
}

export default UserProfile;