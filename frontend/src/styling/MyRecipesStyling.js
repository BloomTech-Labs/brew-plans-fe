import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    pageContainer: {
      flex: .85,
      justifyContent: 'flex-start',
      padding: 24,
      backgroundColor: 'white',
    },
    recipesHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    recipesHeaderText: {
      fontSize: 24
    },
    recipesContainer: {
      paddingVertical: 24
    },
    navbar: {
      width:'105%',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      marginBottom: 20
    },
    navbarButton: {
      width: '48%',
      backgroundColor: 'lightblue',
      borderRadius: 6,
      justifyContent: 'center'
    },  
    navbarText: {
      textAlign: 'center',
      padding: 17,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16
    }
  });