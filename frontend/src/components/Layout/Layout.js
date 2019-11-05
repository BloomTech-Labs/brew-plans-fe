import React from 'react';
import { View, Text } from 'react-native';
import Theme from './Theme';
import NavBar from './NavBar/NavBar';
import { connect } from 'react-redux';
import MyRecipes from '../../views/MyRecipes';

// Layout
const Layout = props => {
  return (
    <Theme>
      {/* {props.isLoggedIn ? <NavBar {...props} /> : null} */}

      <View
        style={{
          flex: 1,
          width: '100%',
          padding: 16,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:'white',
          padding: 24
        }}
      >
        {props.children}
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
