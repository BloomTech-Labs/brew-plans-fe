import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Landing from './src/views/Landing';
import SignUp from './src/views/SignUp';
import Login from './src/views/Login';

// const App = () => {
//   return (
//     <Layout>
//       <Text>Home Page</Text>
//     </Layout>
//   );
// };

const AppNavigator = createStackNavigator({
  Landing: {
    screen: Landing
  },
  SignUp: {
    screen: SignUp
  },
  Login: {
    screen: Login
  }
});

export default createAppContainer(AppNavigator);
