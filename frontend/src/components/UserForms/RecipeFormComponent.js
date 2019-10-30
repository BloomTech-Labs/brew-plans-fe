import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { withTheme, TextInput } from 'react-native-paper';
import OurButton from './SubmitButton';
import { connect } from 'react-redux';
import {
  handleNewRecipeInput,
  createUserRecipe
} from '../../store/actions/index.js';
// import IngredientsForm from './IngredientsForm';

const RecipeFormComponent = props => {
  const { recipe, theme } = props;
  const { createUserRecipe, handleNewRecipeUpdate } = props;

  return (
    <Formik
      initialValues={{ title: '' }}
      onSubmit={values => console.log(values)} /// Add props.handlesubmt or equivelent.
    >
      {props => (
        <View style={styles.formView}>
          <View style={styles.formInputsContainer}>
            <TextInput
              style={styles.formInput}
              onChangeText={value => handleNewRecipeInput('title', value)}
              onBlur={props.handleBlur('title')}
              value={recipe.title}
              label='Title'
              mode='outlined'
              placeholder='Please enter title'
            />

            <TextInput
              style={styles.formInput}
              onChangeText={value => handleNewRecipeInput('brew_type', value)}
              onBlur={props.handleBlur('Brew Method')}
              value={recipe.brew_type} // change this!
              label='Brew Method'
              mode='outlined'
              placeholder='Please Select A Brew Method'
            />

            <TextInput
              style={styles.formInput}
              onChangeText={value => handleNewRecipeInput('water_temp', value)}
              onBlur={props.handleBlur('Temperature')}
              value={recipe.water_temp} // change this!
              label='Brew Temperature'
              mode='outlined'
              placeholder='Please Input your Brew Temperature'
            />

            <TextInput
              style={styles.formInput}
              onChangeText={value => handleNewRecipeInput('coarseness', value)}
              onBlur={props.handleBlur('Grounds Coarseness')}
              value={recipe.coarseness} // change this!
              label='Coarseness'
              mode='outlined'
              placeholder='Please Describe your ground consistancy'
            />
          </View>
          {/* <IngredientsForm /> */}
          <OurButton onPress={() => createUserRecipe(recipe)} title='Submit' />
        </View>
      )}
    </Formik>
  );
};

const styles = {
  formView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  formInputsContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 32
  },

  formInput: {
    marginBottom: 16,
    width: '90%',
    fontSize: 3
  }
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
    createUserRecipe
  }
)(withTheme(RecipeFormComponent));
