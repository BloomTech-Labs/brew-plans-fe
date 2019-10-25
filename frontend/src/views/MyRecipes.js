import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
// import { IconButton } from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Layout from '../components/Layout/Layout';
import { connect } from 'react-redux';
<<<<<<< HEAD
import NavBar from '../components/Layout/NavBar/NavBar.js';
import { 
  getUserRecipes, 
  deleteUserRecipe,
  handleRecipeEdit,
  handleRecipeUpdate
} from '../store/actions/index.js';
=======
import { getUserRecipes, getSeededRecipes } from '../store/actions/index.js';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import UserRecipe from '../components/Recipes/UserRecipe.js';
import SeededRecipe from '../components/Recipes/SeededRecipe.js';
>>>>>>> 0bfe4c065ad8969f494ea4e50f973f711f46fe6f

const MyRecipes = props => {
  useEffect(() => {
    props.getUserRecipes();
    props.getSeededRecipes();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <NavBar {...props} />
      <View style={styles.pageContainer}>
        <View style={styles.recipesHeader}>
          <Text style={styles.recipesHeaderText}>My Recipes</Text>
          <TouchableOpacity onPress={() => console.log('Button pressed!')}>
            <MaterialIcons onPress={() => {}} name={'add-circle'} size={36} color={'black'} />
          </TouchableOpacity>
        </View>

        <View style={styles.recipesContainer}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={props.seededRecipes}
            renderItem={({ item, index }) => (
              <SeededRecipe
                title={item.title}
                brew_type={item.brew_type}
                water_temp={item.water_temp}
              />
            )}
          ></FlatList>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={props.userRecipes}
            renderItem={({ item, index }) => (
<<<<<<< HEAD
              <TouchableOpacity
                onPress={() => console.log('Navigate to recipe page!')}
                style={styles.recipeContainer}
              >
                <Text style={styles.recipeTitle}>{item.title}</Text>
                <View style={styles.recipeInfoContainer}>
                  <View style={styles.recipeInfo}>
                    <Text>{item.brew_type}</Text>
                  </View>
                  <View style={styles.coarseness}>
                  <Text>Coarseness: {item.coarseness}</Text>
                  </View>
                  <View style={styles.recipeInfo}>
                    <Text>{item.water_temp}</Text>
                    <MaterialCommunityIcons
                      name={'temperature-fahrenheit'}
                      size={16}
                      color={'black'}
                    />
                  </View>
                </View>
                <View style={styles.recipeInfoContainer}>
                  <TouchableOpacity>
                    <MaterialIcons onPress={() => props.handleRecipeUpdate({water_temp: 450, coarseness: 'Rough', title: 'Updated this again'}, item.id)} name={'edit'} size={20} color={'black'} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialIcons onPress={() => props.deleteUserRecipe(item.id)} name={'delete'} size={20} color={'black'} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
=======
              <UserRecipe
                title={item.title}
                brew_type={item.brew_type}
                water_temp={item.water_temp}
              />
>>>>>>> 0bfe4c065ad8969f494ea4e50f973f711f46fe6f
            )}
          ></FlatList>
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
<<<<<<< HEAD
  },
  recipeContainer: {
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 8,
    padding: 16,
    justifyContent: 'center',
    borderRadius: 5
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  recipeInfoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  },
  recipeInfo: {
    flexDirection: 'row'
  },
  coarseness: {
    position: 'absolute',
=======
>>>>>>> 0bfe4c065ad8969f494ea4e50f973f711f46fe6f
  }
});

const mapStateToProps = state => {
  return {
    userRecipes: state.userRecipes.userRecipes,
    isLoading: state.userRecipes.isLoading,
    seededRecipes: state.seededRecipes
  };
};

export default connect(
  mapStateToProps,
<<<<<<< HEAD
  { 
    getUserRecipes,
    deleteUserRecipe,
    handleRecipeEdit,
    handleRecipeUpdate
  }
=======
  { getUserRecipes, getSeededRecipes }
>>>>>>> 0bfe4c065ad8969f494ea4e50f973f711f46fe6f
)(MyRecipes);
