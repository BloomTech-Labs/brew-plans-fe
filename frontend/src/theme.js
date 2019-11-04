import { DefaultTheme } from 'react-native-paper';

const fontSizes = [8, 16, 24, 32, 40, 48, 56];

const space = [8, 16, 24, 32, 40, 48, 56];

export default {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: '#ffa537',
    background: 'white',
    surface: '#0f1f40'
  },

  formView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  formInputsContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: space[2]
  },

  formInput: {
    marginBottom: space[1],
    width: '90%',
    fontSize: 3,
  },

  formSocialsContainer: {
    width: '40%',
    marginTop: space[4],
    alignItems: 'center'
  },

  formIcons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginTop: space[0]
  },

  navbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0
  }
};
