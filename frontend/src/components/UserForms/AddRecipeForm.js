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

const AddRecipeForm = props => {
    const {newRecipe} = props;
console.log('props', props)
  return (
    <Formik
      onSubmit={values => console.log('Formik submit Values: ', values) } /// Add props.handlesubmt or equivelent.
    >
      {props => (
        <View style={styles.formView}>
          <View style={styles.formInputsContainer}>

            <TextInput
              style={styles.formInput}
              onChange={(value) => handleNewRecipeInput('title', value)}
              onBlur={props.handleBlur('title')}
             
              label='Title'
              mode='outlined'
              placeholder='Please enter title' />

            
            {/* could use picker */}
            <TextInput
              style={styles.formInput}
              onChange = {(value) => handleNewRecipeInput('brew_type', value)}
              onBlur={props.handleBlur('Brew Method')}
           
              label='Brew Method'
              mode='outlined'
              placeholder='Please Select A Brew Method' />
              
            <TextInput
              style={styles.formInput}
              onChangeText = {(value) => handleNewRecipeInput('water_temp', value)}
              onBlur={props.handleBlur('Temperature')}
            
              label='Brew Temperature'
              mode='outlined'
              placeholder='Please Input your Brew Temperature' />
                
            <TextInput
              style={styles.formInput}
              onChange = {value => handleNewRecipeInput('coarseness', value)}
              onBlur={props.handleBlur('Grounds Coarseness')}
              
               />

              

              {/* for new recipes its fine sending as one object

              for ud - handle ingredients seperately, check to see if ingredients were updated, if they were send it to a seperate endpoint for ingredients
              if the ingredients arent being changed, update it as one object..
                  they have to deal with the ingredient database so well have to send the ud to multiple endpoints- shannons got em coming */}

          </View>
          <OurButton onPress={() => createUserRecipe(newRecipe),  console.log('newRecipe', newRecipe)} title='Submit' />
          
          </View>
      )}
    </Formik>
  );
};

const styles = {
   formView: {
       marginTop: 100,
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
  },
}

const mapStateToProps = state => {
  return {
    recipe: state.userRecipes.newRecipe
  };
};

export default connect(
  mapStateToProps,
  {
    createUserRecipe
  }
)(withTheme(AddRecipeForm));
