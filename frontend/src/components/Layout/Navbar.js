import * as React from 'react';
import { Appbar, Drawer } from 'react-native-paper';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  class AppbarNav extends React.Component {
    render() {
      return (
        <Appbar style={styles.bottom}>
          <Appbar.Action
            icon='menu'
            onPress={() => console.log('Pressed archive')}
          />
        </Appbar>
      );
    }
  }

  class DrawerNav extends React.Component {
    state = {
      active: 'first'
    };

    render() {
      const { active } = this.state;

      return (
        <Drawer.Section title='Some title'>
          <Drawer.Item
            label='First Item'
            active={active === 'first'}
            onPress={() => {
              this.setState({ active: 'first' });
            }}
          />
          <Drawer.Item
            label='Second Item'
            active={active === 'second'}
            onPress={() => {
              this.setState({ active: 'second' });
            }}
          />
        </Drawer.Section>
      );
    }
  }

  const styles = StyleSheet.create({
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    }
  });

  return (
    <AppbarNav>
      <DrawerNav />
    </AppbarNav>
  );
};

export default Navbar;
