import React from 'react';
import { IconButton } from 'react-native-paper';

const SocialButton = props => {
  console.log(props);
  return <IconButton onPress={() => props.googleSignIn()} icon={props.icon} size={36} />;
};

export default SocialButton;
