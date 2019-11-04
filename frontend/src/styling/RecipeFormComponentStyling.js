import { StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

export default StyleSheet.create({
  backgroundOverlay: {
    position: 'absolute',
    zIndex: 150,
    width: vw(100),
    height: vh(100),
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center'
  },
  formHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16
  },
  formView: {
    alignItems: 'center',
    backgroundColor: '#ece6cf',
    width: '90%',
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 5,
    height: 450
  },

  formInputsContainer: {
    width: '100%',
    paddingHorizontal: 24
  },

  formInput: {
    marginHorizontal: 'auto',
    marginVertical: 8,
    width: '100%',
    fontSize: 3
  }
});
