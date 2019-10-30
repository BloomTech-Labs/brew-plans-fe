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
          </View>
          <SubmitButton onPress={props.handleSubmit} title='Submit' />
          </View>
      )}
    </Formik>
  );
};

export default withTheme(RecipeFormComponent);
