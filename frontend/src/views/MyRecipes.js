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

const MyRecipes = props => {
  const { currentUser, newRecipe, createUserRecipe, isLoading } = props;
  const [view, setView] = useState('Default Recipes');
  const [addRecipeModal, setAddRecipeModal] = useState(false);
  const [editRecipeModal, setEditRecipeModal] = useState(false);
  // const [numberIngredients, setNumberIngredients] = useState(['', '']);
  const [userRecipesLoaded, setUserRecipesLoaded] = useState(false);

  useEffect(() => {
    console.log('currentUser', currentUser);
    setUserRecipesLoaded(false);
    props.getUserRecipes(currentUser.id);
    props.getSeededRecipes();
    setUserRecipesLoaded(true);
  }, [view]);

  if (view == 'Default Recipes') {
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
        </View>
          <ScrollView>
            <View style={styles.recipesContainer}>
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
                Alert.alert('Modal has been closed.');
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
                Alert.alert('Modal has been closed.');
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

          <ScrollView>
            <View style={styles.recipesContainer}>
              {/* {console.log('props.userRecipes', props.userRecipes)} */}
              {userRecipesLoaded ? (
                <View>
                  {props.userRecipes.map((recipe, index) => (
                    <UserRecipe
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
                    />
                  ))}
                </View>
              ) : null}
            </View>
          </ScrollView>
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
    recipe: state.userRecipes.newRecipe
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

