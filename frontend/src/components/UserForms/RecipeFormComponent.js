import React, { useState, useEffect } from 'react';
import styles from '../../styling/RecipeFormComponentStyling';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  Button
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { TextInput, withTheme } from 'react-native-paper';
import OurButton from './SubmitButton';
import { connect } from 'react-redux';
import {
  handleNewRecipeInput,
  createUserRecipe,
  handleRecipeUpdate,
  handleRecipeEdit
} from '../../store/actions/index.js';
import AddTimer from "./AddTimer"

const RecipeFormComponent = props => {
  const {
    cancel,
    form,
    titleText,
    newRecipe,
    recipeToEdit,
    currentUser,
    createUserRecipe,
    handleNewRecipeInput,
    handleRecipeEdit,
    handleRecipeUpdate
  } = props;

  const [localInstructions, setLocalInstructions] = useState(
    newRecipe.instructions
  );

  handleInstructionChange=(index, text)=>{
      const theseInstructions = localInstructions
                      theseInstructions.splice(index, 1, {order: index+1, text: text, duration: theseInstructions[index].duration || null
                      // (localInstructions[index].text).concat(text)
                      })
                      setLocalInstructions([
                        ...theseInstructions
                        // ...localInstructions,
                        // {order: [index+1], text: value}
                        //  (localInstructions[index] = {order: [index+1], text: (localInstructions[index].text).concat( value)})
                      ])
  }

  handleDurationChange=(index, duration) => {
    const theseInstr = localInstructions
    theseInstr.splice(index, 1, {order: index+1, duration: Number(duration), text: theseInstr[index].text})
  }

  if (form == 'add') {
    return (
      <Formik
        initialValues={{}}
        // onSubmit={values => console.log(values)} /// Add props.handlesubmt or equivelent.
      >
       
        {props => (
          <View style={styles.backgroundOverlay}>
            <View style={{ ...styles.formView, marginTop: 75 }}>
              <TouchableOpacity onPress={() => cancel()}>
                <MaterialIcons name={'cancel'} size={36} color={'black'} />
              </TouchableOpacity>
              <Text style={styles.formHeader}>{titleText}</Text>
              <ScrollView style={styles.formInputsContainer}>
                <TextInput
                  style={styles.formInput}
                  onChangeText={value => handleNewRecipeInput('title', value)}
                  onBlur={props.handleBlur('title')}
                  value={newRecipe.title}
                  label='Title'
                  mode='outlined'
                  placeholder='Title'
                />

                <TextInput
                  style={styles.formInput}
                  onChangeText={value =>
                    handleNewRecipeInput('brew_type', value)
                  }
                  onBlur={props.handleBlur('Brew Method')}
                  value={newRecipe.brew_type}
                  label='Brew Method'
                  mode='outlined'
                  placeholder='Brew Type'
                />

                <TextInput
                  style={styles.formInput}
                  onChangeText={value =>
                    handleNewRecipeInput('water_temp', value)
                  }
                  onBlur={props.handleBlur('Temperature')}
                  value={newRecipe.water_temp} // change this!
                  label='Brew Temperature'
                  mode='outlined'
                  placeholder='Brew Temperature'
                />

                <TextInput
                  style={styles.formInput}
                  onChangeText={value =>
                    handleNewRecipeInput('coarseness', value)
                  }
                  onBlur={props.handleBlur('Grounds Coarseness')}
                  value={newRecipe.coarseness} // change this!
                  label='Coarseness'
                  mode='outlined'
                  placeholder='Coarseness'
                />
                {localInstructions.map((inst, index) => (
                  <View key={"V"+index}>
                  <TextInput
                    key={"TI"+index}
                    style={styles.formInput}
                    // onChangeText={value =>
                    //   handleNewRecipeInput('instructions', value)
                    // }
                    onChangeText={value =>this.handleInstructionChange(index,value)
   
                    
                    }
                    value={localInstructions[index].text}
                    onBlur={props.handleBlur('Instructions')} // change this!
                    label='Coarseness'
                    mode='outlined'
                    placeholder='Add step'
                  />
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {/* <MaterialIcons key={9594+index}name="timer" size={24} color="#720A13" onPress={()=> {this.addDuration(index)}}/> */}
                  {/* <TextInput
                    style={{...styles.formInput, width: '80%'}}
                    // onChangeText={value =>
                    //   handleNewRecipeInput('instructions', value)
                    // }
                    onChangeText={value =>this.handleInstructionChange(index,value)
   
                    
                    }
                    value={localInstructions[index].duration}
                    onBlur={props.handleBlur('Instructions')} // change this!
                    // label='Coarseness'
                    mode='outlined'
                    placeholder='Add duration in seconds'
                  /> */}
                  </View>
                  <AddTimer handleDurationChange={this.handleDurationChange} index={index} key={"AT"+index} localInstructions={localInstructions} />
                  </View>
                ))}

                <Button
                  // onPress={() => createUserRecipe(recipe)}\
                  style={{ width: '100%' }}
                  onPress={() =>
                    setLocalInstructions([...localInstructions, {}])
                  }
                  title='Add Instructions'
                />
              </ScrollView>
              <OurButton
                // onPress={() => createUserRecipe(recipe)}
                onPress={() => {
                  newRecipe.instructions = localInstructions
                  createUserRecipe(newRecipe, currentUser.id);
                  console.log('newRecipe', newRecipe);
                  cancel();
                }}
                title='Submit'
              />
            </View>
          </View>
        )}
      </Formik>
      // We are going to need:
      // A way to add steps/ingredients
      // so we have to build out a text input field, that is submitted with a button at also prompts the next input field.
    );
  } else if (form == 'edit') {
    return (
      <Formik
        initialValues={{}}
        // onSubmit={values => console.log(values)} /// Add props.handlesubmt or equivelent.
      >
         {console.log("RecipeToEdit in Formik", RecipeToEdit)}
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
                  onChangeText={value => handleRecipeEdit('title', value)}
                  onBlur={props.handleBlur('title')}
                  value={recipeToEdit.title}
                  label='Title'
                  mode='outlined'
                  placeholder='Title'
                />

                <TextInput
                  style={styles.formInput}
                  onChangeText={value => handleRecipeEdit('brew_type', value)}
                  onBlur={props.handleBlur('Brew Method')}
                  value={recipeToEdit.brew_type}
                   label='Brew Method'
                  mode='outlined'
                  placeholder='Brew Type'
                />

                <TextInput
                  style={styles.formInput}
                  onChangeText={value => handleRecipeEdit('water_temp', value)}
                  onBlur={props.handleBlur('Temperature')}
                  value={recipeToEdit.water_temp.toString()} // change this!
                   label='Brew Temperature'
                  mode='outlined'
                  placeholder='Brew Temperature'
                />

                <TextInput
                  style={styles.formInput}
                  onChangeText={value => handleRecipeEdit('coarseness', value)}
                  onBlur={props.handleBlur('Grounds Coarseness')}
                  value={recipeToEdit.coarseness} // change this!
                   label='Coarseness'
                  mode='outlined'
                  placeholder='Coarseness'
                />
              </ScrollView>
              <OurButton
                // onPress={() => createUserRecipe(recipe)}
                onPress={() => {
                  handleRecipeUpdate(recipeToEdit, recipeToEdit.id);
                  cancel();
                }}
                title='Submit'
              />
            </View>
          </View>
        )}
      </Formik>
    );
  }
};

const mapStateToProps = state => {
  return {
    newRecipe: state.userRecipes.newRecipe,
    recipeToEdit: state.userRecipes.recipeToEdit,
    currentUser: state.user.currentUser
  };
};

export default connect(mapStateToProps, {
  handleNewRecipeInput,
  createUserRecipe,
  handleRecipeUpdate,
  handleRecipeEdit
})(withTheme(RecipeFormComponent));
