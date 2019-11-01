import React from 'react';
import styles from '../../styling/RecipeFormComponentStyling';
import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { TextInput } from 'react-native-paper';
import OurButton from './SubmitButton';
import { connect } from 'react-redux';
import {
  handleNewRecipeInput,
  createUserRecipe,
  handleRecipeUpdate
} from '../../store/actions/index.js';
// import IngredientsForm from './IngredientsForm';
import { vw, vh } from 'react-native-expo-viewport-units';

const RecipeFormComponent = props => {
  const { recipe, theme, cancel, form, titleText } = props;
  // const { numberIngredients } = props;
  const { createUserRecipe, handleNewRecipeUpdate } = props;
  if (form == 'add') {console.log('In add form')}
  else if (form == 'edit') {console.log('In edit form')}
  console.log(recipe)

  return (
    <Formik
      initialValues={() => {
        if (form == 'add') {
          return {
            title: 'asdf',
            brew_type: '',
            water_temp: '',
            coarseness: '',
            // ingredients: []
          }
        } else if (form =='edit') {
          return {
            title: recipe.title,
            brew_type: recipe.brew_type,
            water_temp: recipe.water_temp,
            coarseness: recipe.coarseness,
            // ingredients: []
          }
        }
      }}
      onSubmit={values => console.log(values)} /// Add props.handlesubmt or equivelent.
    >
      {props => (
        <View style={styles.backgroundOverlay}>
          <View style={styles.formView}>
            <TouchableOpacity onPress={cancel}>
              <MaterialIcons name={'cancel'} size={36} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.formHeader}>{titleText}</Text>
            <ScrollView style={styles.formInputsContainer}>
              <TextInput
                style={styles.formInput}
                onChangeText={props.handleChange('title')}
                onBlur={props.handleBlur('title')}
                value={props.initialValues.title}
                // label='Title'
                mode='outlined'
                placeholder='Title'
              />

              <TextInput
                style={styles.formInput}
                onChangeText={props.handleChange('brew_type')}
                onBlur={props.handleBlur('Brew Method')}
                value={props.values.brew_type}
                // label='Brew Method'
                mode='outlined'
                placeholder='Brew Type'
              />

              <TextInput
                style={styles.formInput}
                onChangeText={props.handleChange('water_temp')}
                onBlur={props.handleBlur('Temperature')}
                value={props.values.water_temp} // change this!
                // label='Brew Temperature'
                mode='outlined'
                placeholder='Brew Temperature'
              />

              <TextInput
                style={styles.formInput}
                onChangeText={props.handleChange('coarseness')}
                onBlur={props.handleBlur('Grounds Coarseness')}
                value={props.values.coarseness} // change this!
                // label='Coarseness'
                mode='outlined'
                placeholder='Coarseness'
              />
            </ScrollView>
            <OurButton
              // onPress={() => createUserRecipe(recipe)}
              onPress={() => {
                if (form == 'add') {createUserRecipe(props.values, 1)}
                else if (form == 'edit') {handleRecipeUpdate(props.values, recipe.id)}
              }}
              title='Submit'
            />
          </View>
        </View>
      )}
    </Formik>
  );
};


const mapStateToProps = state => {
  return {
    recipe: state.userRecipes.newRecipe
  };
};

export default connect(
  mapStateToProps,
  {
    handleNewRecipeInput,
    createUserRecipe,
    handleRecipeUpdate
  }
)(RecipeFormComponent);
