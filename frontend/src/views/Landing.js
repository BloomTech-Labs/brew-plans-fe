import React, { useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';
import Layout from '../components/Layout/Layout';
import LandingButton from '../components/Landing/LandingButton';
import { connect } from 'react-redux';

const Landing = props => {
  const { isLoggedIn } = props;

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('user', (err, results) => {
        console.log('results', results);
      });
      if (value !== null) {
        // We have data!!
        console.log('value', value);
      }
    } catch (error) {
      // Error retrieving data
      console.log('error', error);
    }
  };

  useEffect(() => {
    _retrieveData();
  }, []);

  return (
    <Layout>
      {isLoggedIn ? (
        // navigate to dashboard component
        props.navigation.navigate('Dashboard')
      ) : (
        <View>
          <LandingButton
            title='Sign Up'
            onPress={() => props.navigation.navigate('SignUp')}
          />
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
