import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#ffa537'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },  
  title: {
    fontSize: 36,
    marginLeft: 10
  },
  skipButton: {
    marginRight: 30
  },
  skipText: {
    fontSize: 20,
    marginTop: 10
  },
  introImage: {
    alignSelf: 'center',
    marginTop: 40,
    width: '90%'
  },
  button: {
    position: 'absolute',
    top: 700,
    backgroundColor: 'grey',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 3
  },
  buttonText: {
    fontSize: 28
  }
})