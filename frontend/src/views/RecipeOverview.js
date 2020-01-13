import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, Image } from 'react-native';

import NavBar from '../components/Layout/NavBar/NavBar';
import styles from '../styling/RecipeOverviewStyling';

const RecipeOverview = props => {
  const { currentRecipe } = props;

  return (
    <View>
      <NavBar />
      <ScrollView>
        <Text>{currentRecipe.title}</Text>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    currentRecipe: state.user.currentRecipe
  };
};

export default connect(mapStateToProps)(RecipeOverview);