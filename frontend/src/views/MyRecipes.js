import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Layout from '../components/Layout/Layout';
import { connect } from 'react-redux';
import { getUserRecipes } from '../store/actions/index.js';
import NavBar from '../components/Layout/NavBar/NavBar.js';

const MyRecipes = props => {
  useEffect(() => {
    props.getUserRecipes();
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
            data={props.userRecipes}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => console.log('Navigate to recipe page!')}
                style={styles.recipeContainer}
              >
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
                <View style={styles.recipeInfoContainer}>
                  <TouchableOpacity style={styles.recipeIcon}>
                    <MaterialIcons name={'edit'} size={20} color={'black'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.recipeIcon}>
                    <MaterialIcons name={'delete'} size={20} color={'black'} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
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
  recipeIcon: {
    padding: 8
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
