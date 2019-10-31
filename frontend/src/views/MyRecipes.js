import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
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
  createUserRecipe
} from '../store/actions/index.js';
import UserRecipe from '../components/Recipes/UserRecipe';
import SeededRecipe from '../components/Recipes/SeededRecipe';

const MyRecipes = props => {
  const { currentUser, newRecipe, createUserRecipe } = props;
  const [ view, setView ] = useState('Default Recipes');
  
  useEffect(() => {
    props.getUserRecipes();
    props.getSeededRecipes();
  }, []);

  if (view == 'Default Recipes') {
    return (
      <View style={{ flex: 1, backgroundColor: '#ece6cf'}}>
        <NavBar {...props} />
        <View style={styles.navbar}>

        <TouchableOpacity onPress={() => setView('Default Recipes')} style={styles.navbarButton}>
          <Text 
            style={styles.navbarText}>Default Recipes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setView('My Recipes')} style={styles.navbarButton}>
          <Text 
            style={styles.navbarText}>My Recipes
          </Text>
        </TouchableOpacity>

        </View>

        <View style={styles.pageContainer}>

          <View style={styles.recipesHeader}>
            <Text style={styles.recipesHeaderText}>Default Recipes</Text>
          </View>

          <View style={styles.recipesContainer}>
            <ScrollView>
              {props.seededRecipes.map(recipe => (
                <SeededRecipe
                  key={recipe.id}
                  title={recipe.title}
                  brew_type={recipe.brew_type}
                  water_temp={recipe.water_temp}
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

      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setView('Default Recipes')} style={styles.navbarButton}>
          <Text 
            style={styles.navbarText}>Default Recipes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setView('My Recipes')} style={styles.navbarButton}>
          <Text 
            style={styles.navbarText}>My Recipes
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pageContainer}>

        <View style={styles.recipesHeader}>
          <Text style={styles.recipesHeaderText}>My Recipes</Text>
          <TouchableOpacity onPress={() => console.log('Button pressed!')}>
            <MaterialIcons
              onPress={() => createUserRecipe(newRecipe, currentUser.id)}
              name={'add-circle'}
              size={36}
              color={'black'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.recipesContainer}>
          <ScrollView>
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
  }
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
  },
  navbar: {
    width:'100%',
    height: 60,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'space-evenly'
  },
  navbarButton: {
    width: '45%',
    backgroundColor: 'purple',
    borderRadius: 2
  },  
  navbarText: {
    textAlign: 'center',
    padding: 17,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});

const mapStateToProps = state => {
  return {
    userRecipes: state.userRecipes.userRecipes,
    isLoading: state.userRecipes.isLoading,
    seededRecipes: state.seededRecipes.seededRecipes,
    newRecipe: state.userRecipes.newRecipe,
    currentUser: state.user.currentUser
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
