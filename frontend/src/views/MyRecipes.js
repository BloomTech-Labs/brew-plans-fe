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
import { getUserRecipes, getSeededRecipes } from '../store/actions/index.js';
import NavBar from '../components/Layout/NavBar/NavBar.js';
import UserRecipe from '../components/Recipes/UserRecipe.js';
import SeededRecipe from '../components/Recipes/SeededRecipe.js';

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
            <MaterialIcons name={'add-circle'} size={36} color={'black'} />
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
              <UserRecipe
                title={item.title}
                brew_type={item.brew_type}
                water_temp={item.water_temp}
              />
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
  { getUserRecipes, getSeededRecipes }
)(MyRecipes);
