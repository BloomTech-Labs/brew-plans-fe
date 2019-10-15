import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import {
  handleChange,
  handleSubmit,
} from './src/store/actions/index.js';
import { TextInput } from 'react-native-paper';


class App extends Component {

  handleChange = (inputField, inputValue) => {
    this.props.onHandleChange(inputField, inputValue)
  }

  handleSubmit = (user) => {
    this.props.onHandleSubmit(user)
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>{this.props.user.username}</Text>
          <TextInput 
          value={this.props.user.username} 
          style={styles.input} 
          onChangeText={(text) => this.handleChange('username', text)}
          />
          <TextInput 
          value={this.props.user.password} 
          style={styles.input} 
          onChangeText={(text) => this.handleChange('password', text)}
          />
          <TextInput 
          value={this.props.user.email} 
          style={styles.input} 
          onChangeText={(text) => this.handleChange('email', text)}
          />
          <Button onPress={() => this.handleSubmit(this.props.user)} title="Press"></Button>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    marginBottom: 10
  },
});

const mapStateToProps = state => {
  return {
    user: {
      username: state.user.user.username,
      password: state.user.user.password,
      email: state.user.user.email
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHandleChange: (inputField, inputValue) => dispatch(handleChange(inputField, inputValue)),
    onHandleSubmit: (user) => dispatch(handleSubmit(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);