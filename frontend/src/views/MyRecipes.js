import React, { useEffect, useState } from 'react';
import styles from '../styling/MyRecipesStyling';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import {
  getUserRecipes,
  getSeededRecipes,
  deleteUserRecipe,
  handleRecipeEdit,
  handleRecipeUpdate,
  createUserRecipe,
  setCurrentRecipe
} from '../store/actions/index.js';
import UserRecipe from '../components/Recipes/UserRecipe';
import SeededRecipe from '../components/Recipes/SeededRecipe';
import RecipeFormComponent from '../components/UserForms/RecipeFormComponent';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MyRecipes = props => {
  const { currentUser, newRecipe, createUserRecipe, isLoading } = props;
  const [view, setView] = useState('Default Recipes');
  const [addRecipeModal, setAddRecipeModal] = useState(false);
  const [editRecipeModal, setEditRecipeModal] = useState(false);
  // const [numberIngredients, setNumberIngredients] = useState(['', '']);
  const [userRecipesLoaded, setUserRecipesLoaded] = useState(false);

  useEffect(() => {
    setUserRecipesLoaded(false);
    props.getUserRecipes(currentUser.id);
    props.getSeededRecipes();
    setUserRecipesLoaded(true);
  }, [view]);

  if (view == 'Default Recipes') {
    return (
      <View style={{flex: 1 }}>
        <NavBar {...props} />
        <View style={styles.pageContainer}>
          <View style={styles.navbar}>
            
            <TouchableOpacity
              onPress={() => setView('Default Recipes')}
              style={styles.navbarButton}
            >
              <Text style={styles.navbarText}>Recipes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setView('My Recipes')}
              style={styles.navbarButton}
            >
              <Text style={styles.navbarText}>My Recipes</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: hp('-40%') }}>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <ScrollView>
              <View style={{ flex: 1 }}>
              {props.seededRecipes.map(recipe => (
                <SeededRecipe
                  key={recipe.id}
                  recipe={recipe}
                  pressed={() => {
                    props.setCurrentRecipe(recipe);
                    // props.navigation.navigate('Recipe');
                    props.navigation.navigate('StartBrew');
                  }}
                />
              ))}
              </View>
            </ScrollView>
          </View>
          </View>


      </View>
    );
  } else if (view == 'My Recipes') {
    return (
      <View style={{ flex: 1 }}>
        <NavBar {...props} />

        <View style={styles.pageContainer}>
          <View style={styles.navbar}>
            <TouchableOpacity
              onPress={() => setView('Default Recipes')}
              style={styles.navbarButton}
            >
              <Text style={styles.navbarText}>Recipes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setView('My Recipes')}
              style={styles.navbarButton}
            >
              <Text style={styles.navbarText}>My Recipes</Text>
            </TouchableOpacity>
          </View>

      
          {addRecipeModal ? (
            <Modal
              visible={addRecipeModal}
              onRequestClose={() => {
                setAddRecipeModal(!addRecipeModal)
                props.getUserRecipes(currentUser.id);
              }}
              transparent={false}
              animationType='fade'
            >
              <RecipeFormComponent
                // numberIngredients={numberIngredients}
                form={'add'}
                titleText={'Create Your Own Recipe'}
                cancel={() => setAddRecipeModal(!addRecipeModal)}
              />
            </Modal>
          ) : null}

          {editRecipeModal ? (
            <Modal
              visible={editRecipeModal}
              onRequestClose={() => {
                setEditRecipeModal(!editRecipeModal)
              }}
              transparent={false}
              animationType='fade'
            >
              <RecipeFormComponent
                // numberIngredients={numberIngredients}
                form={'edit'}
                titleText={'Change Your Recipe'}
                cancel={() => setEditRecipeModal(!editRecipeModal)}
              />
            </Modal>
          ) : null}

          <View style={styles.recipesHeader}>
            <Text style={styles.recipesHeaderText}>Add New Recipe</Text>
            <TouchableOpacity
              onPress={() => setAddRecipeModal(!addRecipeModal)}
            >
              <MaterialIcons name={'add-circle'} size={36} color={'black'} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.recipesContainer}>
              {/* {console.log('props.userRecipes', props.userRecipes)} */}
              {userRecipesLoaded ? (
                <View style={{ flex: 1 }}>
                  {props.userRecipes.map((recipe, index) => {
                    return ( <UserRecipe
                      key={index}
                      recipe={recipe}
                      editRecipeModal={editRecipeModal}
                      setEditRecipeModal={setEditRecipeModal}
                      edit={() => {
                        setEditRecipeModal(!editRecipeModal);
                      }}
                      delete={() => {
                        props.deleteUserRecipe(recipe.id);
                      }}
                      pressed={() => {
                        props.setCurrentRecipe(recipe);
                        props.navigation.navigate('StartBrew');
                        // props.navigation.navigate('UserRecipe');
                      }}
                    /> )
                  })}
                </View>
              ) : null}
            </View>
          </ScrollView>
          </View>
        </View>
      </View>
    );
  }
};

const mapStateToProps = state => {
  return {
    userRecipes: state.userRecipes.userRecipes,
    isLoading: state.userRecipes.isLoading,
    seededRecipes: state.seededRecipes.seededRecipes,
    newRecipe: state.userRecipes.newRecipe,
    currentUser: state.user.currentUser,
    recipe: state.userRecipes.newRecipe,
    currentRecipe: state.user.currentRecipe
  };
};

export default connect(mapStateToProps, {
  getUserRecipes,
  getSeededRecipes,
  deleteUserRecipe,
  handleRecipeEdit,
  handleRecipeUpdate,
  createUserRecipe,
  setCurrentRecipe
})(MyRecipes);

