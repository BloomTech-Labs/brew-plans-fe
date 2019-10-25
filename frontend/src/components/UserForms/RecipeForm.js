import React from 'react';
import { View, AsyncStorage, Button, TextInput } from 'react-native';

import { connect } from 'react-redux';
import { Formik } from 'formik';
import { withTheme } from 'react-native-paper';
import SubmitButton from './SubmitButton';
import Layout from '../../components/Layout/Layout';
// NEED - To import the CRUD actions once we write them out
// import { handleRecipeSignup , handleChange } from '../../store/actions/index.js';

// const RecipeForm = props => {
 
//     // console.log('signupformprops: ', props)
// //   const loginConfig = {
// //     androidClientId:
// //       '449923889220-pa3veecaq72o4tiairfrputrj7f0dp2n.apps.googleRecipecontent.com',
// //     scopes: ['profile', 'email']
// //   };

//   const { theme, newRecipe } = props;
//   // console.log(props);
//   // console.log('newRecipe: ', newRecipe);

//   const submitRecipe = () => {
//     // props.handleRecipeSignup(newRecipe);
//     console.log('Recipe Submited');
//     _storeData(newRecipe);
//   };

//   const handleChange = (inputType, inputValue) => {
//     props.handleChange(inputType, inputValue);
//   };

export const MyReactNativeForm = props => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}
  >
    {props => (
      <View>
        <TextInput
          onChangeText={props.handleChange('email')}
          onBlur={props.handleBlur('email')}
          value={props.values.email}
          placeholder={'funfunfun'}
        />
        <Button onPress={props.handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);


//     console.log('UserForm RecipeForm props', props);
//   return (
//     <Layout>
//     <Formik
//       initialValues={{
//         recipeTitle: '',
//         email: 'emailtext'
//         // recipeTitle: newRecipe.title,
//         // email: newRecipe.email
//       }}
//     >
//       {props => (
//         <View style={theme.formView}>
//           <View style={theme.formInputsContainer}>
//           <TextInput
//               style={theme.formInput}
//               onChangeText={value => handleChange('RecipeTitle', value)}
//               onBlur={props.handleBlur('RecipeTitle')}
//               //value={newRecipe.title}
//               placeholder='Please enter Title'
//               label='RecipeTitle'
//               mode='outlined'
//             />
//             <TextInput
//             style={theme.formInput}
//             onChangeText={value => handleChange('RecipeTitle', value)}
//             onBlur={props.handleBlur('RecipeTitle')}
//             //value={newRecipe.title}
//             placeholder='Please enter Title'
//             label='RecipeTitle'
//             mode='outlined'
//           />
//           <TextInput
//           style={theme.formInput}
//           onChangeText={value => handleChange('RecipeTitle', value)}
//           onBlur={props.handleBlur('RecipeTitle')}
//           //value={newRecipe.title}
//           placeholder='Please enter Title'
//           label='RecipeTitle'
//           mode='outlined'
//         />
//             <TextInput
//               style={theme.formInput}
//               onChangeText={value => handleChange('email', value)}
//               onBlur={props.handleBlur('email')}
//               //value={newRecipe.email}
//               placeholder='Please enter email'
//               // label='Email'
//               // mode='outlined'
//             />
//           </View>
         



//           <SubmitButton onPress={() => submitRecipe()} title='Sign Up' />
//           <View style={theme.formSocialsContainer}>
//             <Text style={{ marginBottom: 8, fontSize: 18, fontStyle: 'italic' }}>
            
//             Recipe Form!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            
//             </Text>
      
//           </View>
//         </View>
//       )}
      
//        {/* // title temp ingredients coarseness brewtime steps  */}
//     </Formik>
//     </Layout>
//   );
// };


export default withTheme(MyReactNativeForm);
