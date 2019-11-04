import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  bpLogo: {
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
    width: '90%',
    height: '50%',
    borderRadius: 10,
    resizeMode: 'contain'
  },
  textContainer: {
    width: '90%',
    alignSelf: 'center',
    top: '70%',
    position: 'absolute',
  },
  introText: {
    textAlign: 'center',
    fontSize: 20
  },
  button: {
    position: 'absolute',
    top: '90%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 3
  },
  buttonText: {
    fontSize: 28
  }
})