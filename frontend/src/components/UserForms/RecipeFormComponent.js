import React from 'react';
import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { TextInput } from 'react-native-paper';
import OurButton from './SubmitButton';
import { connect } from 'react-redux';
import {
  handleNewRecipeInput,
  createUserRecipe
} from '../../store/actions/index.js';
// import IngredientsForm from './IngredientsForm';
import { vw, vh } from 'react-native-expo-viewport-units';

const RecipeFormComponent = props => {
  const { recipe, theme, cancel, numberIngredients } = props;
  const { createUserRecipe, handleNewRecipeUpdate } = props;

  return (
    <Formik
      initialValues={{
        title: '',
        brew_type: '',
        water_temp: '',
        coarseness: '',
        ingredients: []
      }}
      onSubmit={values => console.log(values)} /// Add props.handlesubmt or equivelent.
    >
      {props => (
        <View style={styles.backgroundOverlay}>
          <View style={styles.formView}>
            <TouchableOpacity onPress={cancel}>
              <MaterialIcons name={'cancel'} size={36} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.formHeader}>Create Your Own Recipe</Text>
            <ScrollView style={styles.formInputsContainer}>
              <TextInput
                style={styles.formInput}
                onChangeText={props.handleChange('title')}
                onBlur={props.handleBlur('title')}
                value={props.values.title}
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
              {numberIngredients.map((ingredient, index) => (
                <TextInput
                  key={index}
                  style={styles.formInput}
                  onChangeText={props.handleChange('ingredients')}
                  onBlur={props.handleBlur('Ingredient')}
                  value={props.values.ingredients[index]} // change this!
                  // label='Ingredient'
                  mode='outlined'
                  placeholder='Add ingredient'
                />
              ))}
            </ScrollView>
            {/* <IngredientsForm /> */}
            <OurButton
              // onPress={() => createUserRecipe(recipe)}
              onPress={console.log(props.values)}
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
    borderRadius: 5,
    height: 450
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
)(RecipeFormComponent);
