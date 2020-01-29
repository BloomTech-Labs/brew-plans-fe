import React, { Fragment, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { connect } from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { userLogout } from '../store/actions/user';
import NavBar from '../components/Layout/NavBar/NavBar';
import styles from '../styling/MyRecipesStyling';

import {
  getUserRecipes,
  setCurrentRecipe,
  deleteUserRecipe
} from '../store/actions/index.js';
import UserRecipe from '../components/Recipes/UserRecipe';
import RecipeFormComponent from '../components/UserForms/RecipeFormComponent';

const UserProfile = props => {
  const [editRecipeModal, setEditRecipeModal] = useState(false);

  return (
    <Fragment>
      <NavBar {...props} />
      <View style={{ width: wp('100%'), flex: 1 }}>
        <View style={{ justifyContent: 'space-evenly', alignItems: 'center', height: hp('33%') }}>
          <Text style={{ backgroundColor: '#F7F7F7', color: 'black', fontSize: 20 }}>
            {props.currentUser.email}
          </Text>
          <TouchableOpacity
          style={ styles.navbarButton }>
            <Text style={ styles.navbarText }>My Recipes</Text>
          </TouchableOpacity>
        </View>
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
          <ScrollView style={{ width: wp('90%'), alignSelf: 'center' }}>
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
          </ScrollView>
      </View>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    userRecipes: state.userRecipes.userRecipes,
    isLoading: state.userRecipes.isLoading,
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps, { userLogout, getUserRecipes, setCurrentRecipe, deleteUserRecipe })(UserProfile);
