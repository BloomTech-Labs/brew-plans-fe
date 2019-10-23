import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
// import { IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Layout from '../components/Layout/Layout';
import { connect } from 'react-redux';
import { getUserRecipes } from '../store/actions/index.js';
import Navbar from '../components/Layout/Navbar';

const MyRecipes = props => {
  useEffect(() => {
    props.getUserRecipes();
  }, []);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.recipesHeader}>
        <Text>My Recipes</Text>
        <Button color={'orange'} title={'Add'} />
      </View>

      <View style={styles.recipesContainer}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={props.userRecipes}
          renderItem={({ item, index }) => (
            <View style={styles.recipeContainer}>
              <Text style={styles.recipeTitle}>{item.title}</Text>
              <View style={styles.recipeInfoContainer}>
                <View style={styles.recipeInfo}>
                  <Text>{item.brew_type}</Text>
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
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: 48,
    paddingHorizontal: 24,
    backgroundColor: '#ece6cf'
  },
  recipesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  recipesContainer: {
    marginTop: 24
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
  }
});

const mapStateToProps = state => {
  return {
    userRecipes: state.userRecipes.userRecipes,
    isLoading: state.userRecipes.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getUserRecipes }
)(MyRecipes);
