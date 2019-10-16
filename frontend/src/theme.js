import { DefaultTheme } from 'react-native-paper';

const colors = {
  primary: 'orange'
};

const fontSizes = [8, 16, 24, 32, 40, 48, 56];

const space = [8, 16, 24, 32, 40, 48, 56];

export default {
  ...DefaultTheme,

  formView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  formInputsContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: space[3]
  },

  formInput: {
    marginBottom: space[2],
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    width: '90%'
  },

  submitButton: {
    backgroundColor: colors.primary,
    width: '60%'
  },

  formSocialsContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    marginTop: 48
  }
};
