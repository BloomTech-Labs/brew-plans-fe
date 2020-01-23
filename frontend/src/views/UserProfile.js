import React, { Fragment } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { userLogout } from '../store/actions/user';
import NavBar from '../components/Layout/NavBar/NavBar';
import styles from '../styling/MyRecipesStyling';

const UserProfile = props => {
  console.log(props);
  return (
    <Fragment>
      <NavBar {...props} />
      <View style={{ width: wp('100%') }}>
        <View style={{ justifyContent: 'space-evenly', alignItems: 'center', height: hp('50%') }}>
          <Text style={{ backgroundColor: '#F7F7F7', color: 'black', fontSize: 20 }}>
            Username
          </Text>
          <TouchableOpacity
          style={ styles.navbarButton }>
            <Text style={ styles.navbarText }>My Recipes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { userLogout })(UserProfile);
