
    import * as React from 'react';
    // import { useState } from 'react'
    import { Drawer } from 'react-native-paper';
    
    class NavDrawer extends React.Component {
        state = {
          active: 'first',
        };
      
        render() {
          const { active } = this.state;
      
          return (
            <Drawer.Section title="Some title">
              <Drawer.Item
                label="First Item"
                active={active === 'first'}
                onPress={() => { this.setState({ active: 'first' }); }}
              />
              <Drawer.Item
                label="Second Item"
                active={active === 'second'}
                onPress={() => { this.setState({ active: 'second' }); }}
              />
           </Drawer.Section>
          );
        }
      }

      export default NavDrawer;