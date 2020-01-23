import React from "react";
import { connect } from 'react-redux';
import { View, TouchableOpacity, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { userLogout } from '../../../store/actions/user.js';

const NavBar = props => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: wp('100%'), backgroundColor: '#1F2233', paddingBottom: '1.5%', paddingHorizontal: '3%', height: hp('11%') }}>
      <Image
        source={require('../../../../assets/Group.png')}
        style={{ width: 30, height: 30 }}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('MyRecipes')}>
        <Image
          source={require('../../../../assets/recipe-book.png')}
          style={{ width: 30, height: 30, tintColor: 'white' }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('UserProfile')}>
        <Image
            source={require('../../../../assets/account.png')}
            style={{ width: 30, height: 30, tintColor: 'white' }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.userLogout()}>
        <Image
            source={require('../../../../assets/logout.png')}
            style={{ width: 30, height: 30, tintColor: 'white' }}
        />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {
  userLogout
})(NavBar);
