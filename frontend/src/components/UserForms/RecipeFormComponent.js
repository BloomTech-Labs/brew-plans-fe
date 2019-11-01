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
  handleRecipeUpdate,
  handleRecipeEdit
} from '../../store/actions/index.js';
// import IngredientsForm from './IngredientsForm';

const RecipeFormComponent = props => {
  const { recipe, theme, cancel, form, titleText, newRecipe, recipeToEdit, currentUser } = props;
  // const { numberIngredients } = props;
  const { createUserRecipe, handleNewRecipeInput, handleRecipeEdit, handleRecipeUpdate } = props;
  // console.log("new recipe: ", newRecipe)
  console.log('recipe to edit in form: ', recipeToEdit.water_temp)

  if(form == 'add') {
    return (
<Formik
      initialValues={{}}
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
                onChangeText={(value) => handleNewRecipeInput('title', value)}
                onBlur={props.handleBlur('title')}
                value={newRecipe.title}
                label='Title'
                mode='outlined'
                placeholder='Title'
              />

              <TextInput
                style={styles.formInput}
                onChangeText={(value) => handleNewRecipeInput('brew_type', value)}
                onBlur={props.handleBlur('Brew Method')}
                value={newRecipe.brew_type}
                // label='Brew Method'
                mode='outlined'
                placeholder='Brew Type'
              />

              <TextInput
                style={styles.formInput}
                onChangeText={(value) => handleNewRecipeInput('water_temp', value)}
                onBlur={props.handleBlur('Temperature')}
                value={newRecipe.water_temp} // change this!
                // label='Brew Temperature'
                mode='outlined'
                placeholder='Brew Temperature'
              />

              <TextInput
                style={styles.formInput}
                onChangeText={(value) => handleNewRecipeInput('coarseness', value)}
                onBlur={props.handleBlur('Grounds Coarseness')}
                value={newRecipe.coarseness} // change this!
                // label='Coarseness'
                mode='outlined'
                placeholder='Coarseness'
              />
            </ScrollView>
            <OurButton
              // onPress={() => createUserRecipe(recipe)}
              onPress={() => {
                if (form == 'add') { createUserRecipe(newRecipe, currentUser.id); cancel(); }}
              }
              title='Submit'
            />
          </View>
        </View>
      )}
    </Formik>
    )
  } else if (form == 'edit') {
    return (
      <Formik
      initialValues={{}}
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
                onChangeText={(value) => handleRecipeEdit('title', value)}
                onBlur={props.handleBlur('title')}
                value={recipeToEdit.title}
                label='Title'
                mode='outlined'
                placeholder='Title'
              />

              <TextInput
                style={styles.formInput}
                onChangeText={(value) => handleRecipeEdit('brew_type', value)}
                onBlur={props.handleBlur('Brew Method')}
                value={recipeToEdit.brew_type}
                // label='Brew Method'
                mode='outlined'
                placeholder='Brew Type'
              />

              <TextInput
                style={styles.formInput}
                onChangeText={(value) => handleRecipeEdit('water_temp', value)}
                onBlur={props.handleBlur('Temperature')}
                value={recipeToEdit.water_temp.toString()} // change this!
                // label='Brew Temperature'
                mode='outlined'
                placeholder='Brew Temperature'
              />

              <TextInput
                style={styles.formInput}
                onChangeText={(value) => handleRecipeEdit('coarseness', value)}
                onBlur={props.handleBlur('Grounds Coarseness')}
                value={recipeToEdit.coarseness} // change this!
                // label='Coarseness'
                mode='outlined'
                placeholder='Coarseness'
              />
            </ScrollView>
            <OurButton
              // onPress={() => createUserRecipe(recipe)}
              onPress={() => {console.log('form values: ', recipeToEdit); handleRecipeUpdate(recipeToEdit, recipeToEdit.id)
              }}
              title='Submit'
            />
          </View>
        </View>
      )}
    </Formik>
    )
  }
};


const mapStateToProps = state => {
  return {
    newRecipe: state.userRecipes.newRecipe,
    recipeToEdit: state.userRecipes.recipeToEdit,
    currentUser: state.user.currentUser
  };
};

export default connect(
  mapStateToProps,
  {
    handleNewRecipeInput,
    createUserRecipe,
    handleRecipeUpdate,
    handleRecipeEdit
  }
)(RecipeFormComponent);
