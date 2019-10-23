import React from 'react';
import { View, Text } from 'react-native';
import Theme from './Theme';
import NavBar from './NavBar/NavBar';
import { connect } from 'react-redux';
import MyRecipes from '../../views/MyRecipes';

// Layout
const Layout = props => {
  const { isLoggedIn } = props;
  return (
    <Theme>
      {isLoggedIn ? <NavBar {...props} /> : null}
    
      <View
        style={{
          flex: 1,
          padding: 16,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ece6cf',
          marginTop: 56
        }}
      >

        <MyRecipes />
      </View>
    </Theme>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(mapStateToProps)(Layout);
