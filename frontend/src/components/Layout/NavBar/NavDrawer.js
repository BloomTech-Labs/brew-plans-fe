import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Drawer } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

const NavDrawer = props => {
  const [active, setActive] = useState('first');
  return (
    <Animatable.View
      style={{
        height: 460,
        width: '65%',
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 150,
        top: 80,
        right: 0
      }}
      animation='slideInRight'
    >
      <Drawer.Section
        style={{
          paddingVertical: 16
        }}
        // title='Some title'
      >
        <Drawer.Item
          label='Dashboard'
          active={active === 'first'}
          onPress={() => {
            setActive('first');
            props.navigation.navigate('Dashboard');
          }}
          style={{
            marginVertical: 8
          }}
        />
        <Drawer.Item
          label='Recipes'
          active={active === 'second'}
          onPress={() => {
            setActive('second');
            props.navigation.navigate('MyRecipes');
          }}
          style={{
            marginVertical: 8,
            paddingVertical: 4
          }}
        />
      </Drawer.Section>
    </Animatable.View>
  );
};

export default NavDrawer;
