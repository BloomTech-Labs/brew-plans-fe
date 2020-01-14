import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    pageContainer: {
      flex: .85,
      justifyContent: 'flex-start',
      padding: 20,
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
      paddingVertical: 15,
      width:'96%',
      alignSelf: 'center'
    },
    navbar: {
      width:'100%',
      height: 80,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    navbarButton: {
      width: '96%',
      alignSelf: 'center',
      backgroundColor: '#1F2233',
      borderRadius: 2,
      justifyContent: 'center',
      marginTop: 15
    },  
    navbarText: {
      textAlign: 'left',
      padding: 13,
      color: 'white',
      fontSize: 27
    }
  });



