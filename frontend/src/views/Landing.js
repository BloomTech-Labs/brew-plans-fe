import React from 'react';
import { View } from 'react-native';
import Layout from '../components/Layout/Layout';
import LandingButton from '../components/Landing/LandingButton';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';


const Landing = props => {
  const { isLoggedIn } = props;

  return (
    <Layout>
      {isLoggedIn ? (
        // navigate to dashboard component
        props.navigation.navigate('Dashboard')
      ) : (
        <View>
          <LandingButton title='Sign Up' onPress={() => props.navigation.navigate('SignUp')} />
          <LandingButton
            title='Login'
            onPress={() => props.navigation.navigate('Login')}
          />
        </View>
      )}
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(mapStateToProps)(Landing);
