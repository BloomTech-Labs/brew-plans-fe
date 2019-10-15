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
    console.log(this.props.onHandleChange)
    return (
        <View style={styles.container}>
          <Text>{this.props.username}</Text>
          <TextInput 
          value={this.props.username} 
          style={styles.input} 
          onChangeText={(text) => this.handleChange('username', text)}
          />
          <TextInput 
          value={this.props.password} 
          style={styles.input} 
          onChangeText={(text) => this.handleChange('password', text)}
          />
          <TextInput 
          value={this.props.email} 
          style={styles.input} 
          onChangeText={(text) => this.handleChange('email', text)}
          />
          <Button onPress={() => this.handleSubmit(this.props.user)} title="Yeet"></Button>
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
      username: state.user.username,
      password: state.user.password,
      email: state.user.email
    }
};

const mapDispatchToProps = dispatch => {
  return {
    onHandleChange: (inputField, inputValue) => dispatch(handleChange(inputField, inputValue)),
    onHandleSubmit: (user) => dispatch(handleSubmit(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);