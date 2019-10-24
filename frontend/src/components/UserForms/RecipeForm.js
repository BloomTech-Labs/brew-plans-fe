import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { withTheme } from 'react-native-paper';
import SubmitButton from './SubmitButton';

// NEED - To import the CRUD actions once we write them out
// import { handleRecipeSignup , handleChange } from '../../store/actions/index.js';

const RecipeForm = props => {
  _storeData = async newRecipe => {
    try {
      await AsyncStorage.setItem(
        'recipe',
        JSON.stringify(newRecipe),
        (err, result) => {
          console.log('sign up result', result);
        }
      );
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  // console.log('signupformprops: ', props)
//   const loginConfig = {
//     androidClientId:
//       '449923889220-pa3veecaq72o4tiairfrputrj7f0dp2n.apps.googleRecipecontent.com',
//     scopes: ['profile', 'email']
//   };

  const { theme, newRecipe } = props;
  // console.log(props);
  // console.log('newRecipe: ', newRecipe);

  const submitRecipe = () => {
    // props.handleRecipeSignup(newRecipe);
    console.log('Recipe Submited');
    _storeData(newRecipe);
  };

  const handleChange = (inputType, inputValue) => {
    props.handleChange(inputType, inputValue);
  };

  return (
    <Formik
      initialValues={{
        recipeTitle: newRecipe.title,
        email: newRecipe.email
      }}
    >
      {props => (
        <View style={theme.formView}>
          <View style={theme.formInputsContainer}>
            <TextInput
              style={theme.formInput}
              onChangeText={value => handleChange('RecipeTitle', value)}
              onBlur={props.handleBlur('recipeTitle')}
              value={newRecipe.title}
              placeholder='Please enter Title'
              label='RecipeTitle'
              mode='outlined'
            />
            <TextInput
              style={theme.formInput}
              onChangeText={value => handleChange('email', value)}
              onBlur={props.handleBlur('email')}
              value={newRecipe.email}
              placeholder='Please enter email'
              // label='Email'
              // mode='outlined'
            />
          </View>




          <SubmitButton onPress={() => submitRecipe()} title='Sign Up' />
          <View style={theme.formSocialsContainer}>
            <Text style={{ marginBottom: 8, fontSize: 18, fontStyle: 'italic' }}>
            
            Recipe Form!
            
            </Text>
            <View style={theme.formIcons}>
              <SocialButton icon='zoom-in' loginConfig={loginConfig} />
              <SocialButton icon='book' />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

const mapStateToProps = state => {
  return {
    newRecipe: {
      RecipeName: state.Recipe.newRecipe.RecipeName,
      password: state.Recipe.newRecipe.password,
    }
  };
};

export default connect(
  mapStateToProps,
  {
    handleRecipe,
    handleChange
  }
)(withTheme(RecipeForm));
