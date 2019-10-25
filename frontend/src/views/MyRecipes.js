import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Layout from '../components/Layout/Layout';
import { connect } from 'react-redux';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import {
  getUserRecipes,
  deleteUserRecipe,
  handleRecipeEdit,
  handleRecipeUpdate
} from '../store/actions/index.js';
import UserRecipe from '../components/Recipes/UserRecipe';
import SeededRecipe from '../components/Recipes/SeededRecipe';

const MyRecipes = props => {
  useEffect(() => {
    props.getUserRecipes();
    // props.getSeededRecipes();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <NavBar {...props} />
      <View style={styles.pageContainer}>
        <View style={styles.recipesHeader}>
          <Text style={styles.recipesHeaderText}>My Recipes</Text>
          <TouchableOpacity onPress={() => console.log('Button pressed!')}>
            <MaterialIcons
              onPress={() => {}}
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
              />
            ))}
            {props.userRecipes.map(recipe => (
              <UserRecipe
                key={recipe.id}
                title={recipe.title}
                brew_type={recipe.brew_type}
                water_temp={recipe.water_temp}
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
          {/* <FlatList
            keyExtractor={item => item.id.toString()}
            data={props.userRecipes}
            ListHeaderComponent={}
            renderItem={({ item, index }) => (
              <View>
                {props.seededRecipes.map(recipe => (
                  <SeededRecipe
                    key={recipe.id}
                    title={recipe.title}
                    brew_type={recipe.brew_type}
                    water_temp={recipe.water_temp}
                  />
                ))}
                <UserRecipe
                  title={item.title}
                  brew_type={item.brew_type}
                  water_temp={item.water_temp}
                />
              </View>
            )}
          ></FlatList> */}
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
    position: 'absolute'
  }
});

const mapStateToProps = state => {
  return {
    userRecipes: state.userRecipes.userRecipes,
    isLoading: state.userRecipes.isLoading,
    seededRecipes: state.seededRecipes.seededRecipes
  };
};

export default connect(
  mapStateToProps,
  {
    getUserRecipes,
    deleteUserRecipe,
    handleRecipeEdit,
    handleRecipeUpdate
  }
)(MyRecipes);
