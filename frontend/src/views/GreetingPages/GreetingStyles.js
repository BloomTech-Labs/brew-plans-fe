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
    marginLeft: 10,
    marginTop: 20
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
    marginTop: 140,
    marginBottom: 20,
    width: '95%',
    height: '40%',
    borderRadius: 10,
    resizeMode: 'contain'
  },
  introImage2: {
    alignSelf: 'center',
    marginTop: 70,
    marginBottom: 20,
    width: '95%',
    height: '40%',
    borderRadius: 10,
    resizeMode: 'contain'
  },
  textContainer: {
    width: '90%',
    alignSelf: 'center',
    top: '70%',
    position: 'absolute'
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
});
