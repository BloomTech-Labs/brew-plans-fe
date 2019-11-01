import React, { useEffect, useState } from 'react';
import styles from '../styling/MyRecipesStyling';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Layout from '../components/Layout/Layout';
import { connect } from 'react-redux';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import {
  getUserRecipes,
  getSeededRecipes,
  deleteUserRecipe,
  handleRecipeEdit,
  handleRecipeUpdate,
  createUserRecipe
} from '../store/actions/index.js';
import UserRecipe from '../components/Recipes/UserRecipe';
import SeededRecipe from '../components/Recipes/SeededRecipe';
import RecipeFormComponent from '../components/UserForms/RecipeFormComponent';

const MyRecipes = props => {
  const { currentUser, newRecipe, createUserRecipe } = props;
  const [ view, setView ] = useState('Default Recipes');
  const [ addRecipeModal, setAddRecipeModal ] = useState(false);
  const [ editRecipeModal, setEditRecipeModal ] = useState(false);
  const [ recipeToEdit, setRecipeToEdit ] = useState({});
  // const [numberIngredients, setNumberIngredients] = useState(['', '']);
  
  useEffect(() => {
    props.getUserRecipes();
    props.getSeededRecipes();
  }, []);

  if (view == 'Default Recipes') {
    return (
      <View style={{ flex: 1, backgroundColor: '#ece6cf'}}>
        <NavBar {...props} />
        <View style={styles.pageContainer}>

          <View style={styles.navbar}>
            <TouchableOpacity onPress={() => setView('Default Recipes')} style={styles.navbarButton}>
              <Text 
                style={styles.navbarText}>Brew Plan's Recipes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setView('My Recipes')} style={styles.navbarButton}>
              <Text 
                style={styles.navbarText}>My Recipes
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recipesHeader}>
            <Text style={styles.recipesHeaderText}>Brew Plan's Recipes</Text>
          </View>

          <View style={styles.recipesContainer}>
            <ScrollView>
              {props.seededRecipes.map(recipe => (
                <SeededRecipe
                  key={recipe.id}
                  recipe={recipe}
                  pressed={() => props.navigation.navigate('SeededRecipe')}
                />
              ))}
            </ScrollView>
          </View>

        </View>
      </View>
    );
  } else if (view == 'My Recipes') {
    return (
    <View style={{ flex: 1, backgroundColor: '#ece6cf'}}>
      <NavBar {...props} />

      <View style={styles.pageContainer}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => setView('Default Recipes')} style={styles.navbarButton}>
            <Text 
              style={styles.navbarText}>Brew Plan's Recipes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setView('My Recipes')} style={styles.navbarButton}>
            <Text 
              style={styles.navbarText}>My Recipes
            </Text>
          </TouchableOpacity>
        </View>

        {addRecipeModal ? (
          <RecipeFormComponent
            // numberIngredients={numberIngredients}
            form={'add'}
            titleText={'Create Your Own Recipe'}
            cancel={() => setAddRecipeModal(!addRecipeModal)}
          />
        ) : null}

        {editRecipeModal ? (
          <RecipeFormComponent
            // numberIngredients={numberIngredients}
            form={'edit'}
            recipe={recipeToEdit}
            titleText={'Change Your Recipe'}
            cancel={() => setEditRecipeModal(!editRecipeModal)}
          />
        ) : null}

        <View style={styles.recipesHeader}>
          <Text style={styles.recipesHeaderText}>My Recipes</Text>
          <TouchableOpacity onPress={() => setAddRecipeModal(!addRecipeModal)}>
            <MaterialIcons
              name={'add-circle'}
              size={36}
              color={'black'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.recipesContainer}>
          <ScrollView>
            {props.userRecipes.map((recipe, index) => (
              <UserRecipe
                key={index}
                recipe={recipe}
                setRecipeToEdit={setRecipeToEdit}
                edit={() => {
                  setEditRecipeModal(!editRecipeModal);
                  console.log(recipeToEdit)
                }}
                delete={() => props.deleteUserRecipe(recipe.id)}
              />
            ))}
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
    recipe: state.userRecipes.newRecipe
  };
};

export default connect(
  mapStateToProps,
  {
    getUserRecipes,
    getSeededRecipes,
    deleteUserRecipe,
    handleRecipeEdit,
    handleRecipeUpdate,
    createUserRecipe
  }
)(MyRecipes);
