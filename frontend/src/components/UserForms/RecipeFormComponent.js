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
  handleRecipeEdit,
  setCurrentRecipe
} from '../../store/actions/index.js';
import AddTimer from './AddTimer';
import theme from '../../theme';

const RecipeFormComponent = props => {
  const {
    cancel,
    form,
    titleText,
    newRecipe,
    recipeToEdit,
    isLoading,
    currentUser,
    createUserRecipe,
    handleNewRecipeInput,
    handleRecipeEdit,
    handleRecipeUpdate
  } = props;

  const [localInstructions, setLocalInstructions] = useState(
    newRecipe.instructions
  );

  useEffect(() => {
    if (form == 'edit') {
      setLocalInstructions(recipeToEdit.instructions);
    }

    console.log('4. RecipeToEdit in Formik', recipeToEdit);
    // console.log('localInstructions', localInstructions);
    // console.log('form', form);
  }, [isLoading]);

  handleInstructionChange = (index, text) => {
    const theseInstructions = localInstructions;
    theseInstructions.splice(index, 1, {
      order: index + 1,
      text: text,
      duration: theseInstructions[index].duration || null,
      id: theseInstructions[index].id || null
      // (localInstructions[index].text).concat(text)
    });
    setLocalInstructions([
      ...theseInstructions
      // ...localInstructions,
      // {order: [index+1], text: value}
      //  (localInstructions[index] = {order: [index+1], text: (localInstructions[index].text).concat( value)})
    ]);
  };

  handleDurationChange = (index, duration) => {
    const theseInstr = localInstructions;
    theseInstr.splice(index, 1, {
      order: index + 1,
      duration: Number(duration),
      text: theseInstr[index].text,
      id: theseInstr[index].id || null
    });
    setLocalInstructions([...theseInstr]);
  };

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
                  theme={theme}
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
                  theme={theme}
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
                  theme={theme}
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
                  theme={theme}
                />
                {localInstructions.map((inst, index) => (
                  <View
                    style={{
                      justifyContent: 'center',
                      flexWrap: 'wrap'
                    }}
                    key={'V' + index}
                  >
                    <TextInput
                      key={'TI' + index}
                      style={styles.formInput}
                      // onChangeText={value =>
                      //   handleNewRecipeInput('instructions', value)
                      // }
                      onChangeText={value =>
                        this.handleInstructionChange(index, value)
                      }
                      value={localInstructions[index].text}
                      onBlur={props.handleBlur('Instructions')} // change this!
                      label={'Step' + " " + index}
                      mode='outlined'
                      placeholder='Add step'
                      theme={theme}
                    />
                    <AddTimer
                      handleDurationChange={this.handleDurationChange}
                      index={index}
                      key={'AT' + index}
                      localInstructions={localInstructions}
                    />
                  </View>
                ))}

                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    marginVertical: 6
                  }}
                >
                  <OurButton
                    // onPress={() => createUserRecipe(recipe)}\
                    onPress={() =>
                      setLocalInstructions([...localInstructions, {}])
                    }
                    title='Add Step'
                  />
                </View>
              </ScrollView>
              <OurButton
                // onPress={() => createUserRecipe(recipe)}
                onPress={() => {
                  newRecipe.instructions = localInstructions;
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
  } else if (form == 'edit' && isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else if (form == 'edit' && !isLoading) {
    //console.log('localinstructions FORMIK RETURN', localInstructions);
    const instructionsMap =
      recipeToEdit.instructions.length > 0 ? (
        localInstructions.map((instruction, index) => {
          // recipeToEdit.instructions.map((instruction, index) => {
          return (
            <View>
              {console.log('Instruction in .map', instruction)}

              <TextInput
                style={styles.formInput}
                value={localInstructions[index].text}
                key={'inst' + index}
                label={`Step`}
                onChangeText={value =>
                  this.handleInstructionChange(index, value)
                }
                placeholder='blah'
                mode='outlined'
              />
              <AddTimer
                handleDurationChange={this.handleDurationChange}
                index={index}
                key={'EF' + index}
                localInstructions={localInstructions}
              />
            </View>
          );
        })
      ) : (
        // )
        <>{console.log('ELSE')}</>
      );
    return (
      <View>
        <Formik
          initialValues={{}}
          // onSubmit={values => console.log(values)} /// Add props.handlesubmt or equivelent.
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
                    onChangeText={value =>
                      handleRecipeEdit('water_temp', value)
                    }
                    onBlur={props.handleBlur('Temperature')}
                    value={recipeToEdit.water_temp} // moved .toString() to reducer
                    label='Brew Temperature'
                    mode='outlined'
                    placeholder='Brew Temperature'
                  />
                  <TextInput
                    style={styles.formInput}
                    onChangeText={value =>
                      handleRecipeEdit('coarseness', value)
                    }
                    onBlur={props.handleBlur('Grounds Coarseness')}
                    value={recipeToEdit.coarseness} // change this!
                    label='Coarseness'
                    mode='outlined'
                    placeholder='Coarseness'
                  />

                  {console.log('instructionsMap', instructionsMap)}
                  {instructionsMap}
                </ScrollView>
                <OurButton
                  // onPress={() => createUserRecipe(recipe)}
                  onPress={() => {
                    recipeToEdit.instructions = localInstructions;
                    handleRecipeUpdate(recipeToEdit, recipeToEdit.id);
                    cancel();
                  }}
                  title='Submit'
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    );
  }
};

const mapStateToProps = state => {
  return {
    newRecipe: state.userRecipes.newRecipe,
    recipeToEdit: state.userRecipes.recipeToEdit,
    isLoading: state.userRecipes.isLoading,
    currentUser: state.user.currentUser,
    currentRecipe: state.user.currentRecipe
  };
};

export default connect(mapStateToProps, {
  handleNewRecipeInput,
  createUserRecipe,
  handleRecipeUpdate,
  handleRecipeEdit
})(RecipeFormComponent);
