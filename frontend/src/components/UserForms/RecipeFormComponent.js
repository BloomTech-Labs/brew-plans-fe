import React from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import { withTheme, TextInput } from 'react-native-paper';
import SubmitButton from './SubmitButton';

const RecipeFormComponent = props => {
   const theme = props.theme;

  return (
    <Formik
      initialValues={{ title: '' }}
      onSubmit={values => console.log(values)}
    >
      {props => (
        <View style={theme.formView}>
          <View style={theme.formInputsContainer}>
            <TextInput
              style={theme.formInput}
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')}
              value={props.values.username}
              label='Title'
              mode='outlined'
              placeholder='Please enter title'
            />
            <TextInput
            style={theme.formInput}
            onChangeText = {props.handleChange('Brew Method')}
                nBlur={props.handleBlur('Brew Method')}
              value={props.values.username} // change this!
              label='Brew Method'
              mode='outlined'
              placeholder='Please Select A Brew Method' />
              
              <TextInput
              style={theme.formInput}
              onChangeText = {props.handleChange('Water Temperature')}
                  nBlur={props.handleBlur('Temperature')}
                value={props.values.username} // change this!
                label='Brew Temperature'
                mode='outlined'
                placeholder='Please Input your Brew Temperature' />
                
                <TextInput
                style={theme.formInput}
                onChangeText = {props.handleChange('Courseness')}
                    nBlur={props.handleBlur('Grounds Courseness')}
                  value={props.values.username} // change this!
                  label='Courseness'
                  mode='outlined'
                  placeholder='Please Describe your ground consistancy' />
              <View>

                <TextInput
                style={theme.formInput}
                onChangeText = {props.handleChange('Brew Method')}
                nBlur={props.handleBlur('Brew Method')}
                value={props.values.username} // change this!
                label='Brew Method'
                mode='outlined'
                placeholder='Please Select A Brew Method' />
                </View>
          </View>
          <SubmitButton onPress={props.handleSubmit} title='Submit' />
          </View>
      )}
    </Formik>
  );
};

export default withTheme(RecipeFormComponent);
