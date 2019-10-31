import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
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
  useEffect(() => {
    props.getUserRecipes();
    props.getSeededRecipes();
  }, []);

  const [formModal, setFormModal] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <NavBar {...props} />
      <View style={styles.pageContainer}>
        {formModal ? (
          <RecipeFormComponent cancel={() => setFormModal(!formModal)} />
        ) : null}
        <View style={styles.recipesHeader}>
          <Text style={styles.recipesHeaderText}>My Recipes</Text>
          <TouchableOpacity onPress={() => setFormModal(!formModal)}>
            <MaterialIcons
              // onPress={() => props.createUserRecipe(props.newRecipe)}
              name={'add-circle'}
              size={36}
              color={'black'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.recipesContainer}>
          <ScrollView>
            {props.seededRecipes.map(recipe => (
              <SeededRecipe
                key={recipe.id}
                title={recipe.title}
                brew_type={recipe.brew_type}
                water_temp={recipe.water_temp}
                press={() => props.navigation.navigate('SeededRecipe')}
              />
            ))}
            {props.userRecipes.map(recipe => (
              <UserRecipe
                key={recipe.id}
                title={recipe.title}
                brew_type={recipe.brew_type}
                water_temp={recipe.water_temp}
                coarseness={recipe.coarseness}
                edit={() =>
                  props.handleRecipeUpdate(
                    {
                      water_temp: 450,
                      coarseness: 'Rough',
                      title: 'Updated this again'
                    },
                    recipe.id
                  )
                }
                delete={() => props.deleteUserRecipe(recipe.id)}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 24,
    backgroundColor: '#ece6cf'
  },
  recipesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  recipesHeaderText: {
    fontSize: 24
  },
  recipesContainer: {
    paddingVertical: 24
  }
});

const mapStateToProps = state => {
  return {
    userRecipes: state.userRecipes.userRecipes,
    isLoading: state.userRecipes.isLoading,
    seededRecipes: state.seededRecipes.seededRecipes,
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
