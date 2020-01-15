import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    pageContainer: {
      padding: 20
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
      paddingVertical: 15,
      width:'96%',
      alignSelf: 'center'
    },
    navbar: {
      width:'96%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1F2233',
      borderRadius: 2,
      marginVertical: 10
    }, 
    navbarText: {
      padding: 13,
      color: 'white',
      fontSize: 27
    }
  });



