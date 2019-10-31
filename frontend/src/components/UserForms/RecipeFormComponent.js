import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Formik } from 'formik';
import { withTheme, TextInput } from 'react-native-paper';
import OurButton from './SubmitButton';
import { connect } from 'react-redux';
import {
  handleNewRecipeInput,
  createUserRecipe
} from '../../store/actions/index.js';
// import IngredientsForm from './IngredientsForm';
import { vw, vh } from 'react-native-expo-viewport-units';

const RecipeFormComponent = props => {
  const { recipe, theme, cancel } = props;
  const { createUserRecipe, handleNewRecipeUpdate } = props;

  return (
    <Formik
      initialValues={{ title: '' }}
      onSubmit={values => console.log(values)} /// Add props.handlesubmt or equivelent.
    >
      {props => (
        <View style={styles.backgroundOverlay}>
          <View style={styles.formView}>
            <Button title='Cancel' onPress={cancel} />
            <Text style={styles.formHeader}>Create Your Own Recipe</Text>
            <ScrollView style={styles.formInputsContainer}>
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
                onChangeText={value =>
                  handleNewRecipeInput('water_temp', value)
                }
                onBlur={props.handleBlur('Temperature')}
                value={recipe.water_temp} // change this!
                label='Brew Temperature'
                mode='outlined'
                placeholder='Please Input your Brew Temperature'
              />

              <TextInput
                style={styles.formInput}
                onChangeText={value =>
                  handleNewRecipeInput('coarseness', value)
                }
                onBlur={props.handleBlur('Grounds Coarseness')}
                value={recipe.coarseness} // change this!
                label='Coarseness'
                mode='outlined'
                placeholder='Please Describe your ground consistancy'
              />
              <TextInput
                style={styles.formInput}
                onChangeText={value =>
                  handleNewRecipeInput('coarseness', value)
                }
                onBlur={props.handleBlur('Grounds Coarseness')}
                value={recipe.coarseness} // change this!
                label='Coarseness'
                mode='outlined'
                placeholder='Please Describe your ground consistancy'
              />
              <TextInput
                style={styles.formInput}
                onChangeText={value =>
                  handleNewRecipeInput('coarseness', value)
                }
                onBlur={props.handleBlur('Grounds Coarseness')}
                value={recipe.coarseness} // change this!
                label='Coarseness'
                mode='outlined'
                placeholder='Please Describe your ground consistancy'
              />
              <TextInput
                style={styles.formInput}
                onChangeText={value =>
                  handleNewRecipeInput('coarseness', value)
                }
                onBlur={props.handleBlur('Grounds Coarseness')}
                value={recipe.coarseness} // change this!
                label='Coarseness'
                mode='outlined'
                placeholder='Please Describe your ground consistancy'
              />
            </ScrollView>
            {/* <IngredientsForm /> */}
            <OurButton
              onPress={() => createUserRecipe(recipe)}
              title='Submit'
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = {
  backgroundOverlay: {
    position: 'absolute',
    zIndex: 150,
    width: vw(100),
    height: vh(100),
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center'
  },
  formHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16
  },
  formView: {
    alignItems: 'center',
    backgroundColor: '#ece6cf',
    width: '90%',
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 5
  },

  formInputsContainer: {
    width: '100%',
    paddingHorizontal: 24
  },

  formInput: {
    marginHorizontal: 'auto',
    marginBottom: 16,
    width: '100%',
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
