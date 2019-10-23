import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Layout from '../components/Layout/Layout';
import { connect } from 'react-redux';
import { getUserRecipes } from '../store/actions/index.js';
import Navbar from '../components/Layout/Navbar';

const MyRecipes = props => {
  useEffect(() => {
    props.getUserRecipes();
  }, []);
  // const [recipes, setRecipes] = useState([
  //   {
  //     id: 1,
  //     title: 'Nitro Cold Brew'
  //   },
  //   {
  //     id: 2,
  //     title: 'Vanilla Latte'
  //   },
  //   {
  //     id: 3,
  //     title: 'Vanilla Cappuccino'
  //   }
  // ]);
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.recipesHeader}>My Recipes</Text>

      <View style={styles.recipesContainer}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={props.userRecipes}
          renderItem={({ item, index }) => (
            <View style={styles.recipeContainer}>
              <Text style={styles.recipeTitle}>{item.title}</Text>
              <View style={styles.recipeInfoContainer}>
                <View style={styles.recipeInfo}>
                  <Text>Pour Over</Text>
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
    fontSize: 24
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
