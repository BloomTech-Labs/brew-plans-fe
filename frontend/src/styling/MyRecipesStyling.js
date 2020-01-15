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
      marginTop: 15,
      padding: 10,
      fontSize: 24
    },
    recipesContainer: {
      paddingVertical: 15,
      width:'90%',
      alignSelf: 'center'
    },
    navbarButton: {
      width: '98%',
      alignSelf: 'center',
      backgroundColor: '#1F2233',
      borderRadius: 2,
      justifyContent: 'center',
      marginTop: 15
    },  
    navbarText: {
      padding: 15 ,
      color: 'white',
      textAlign: 'left',
      fontSize: 27
    }
  });



