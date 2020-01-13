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
    // recipesContainer: {
    //   paddingVertical: 24
    // },
    navbar: {
      width:'100%',
      height: 80,
      flexDirection: 'column',
      justifyContent: 'space-between',
  
      
    },
    navbarButton: {
      width: '97%',
      alignSelf: 'center',
      backgroundColor: '#1F2233',
      borderRadius: 2,
      justifyContent: 'center',
      marginTop: 15
    },  
    navbarText: {
      textAlign: 'left',
      padding: 10,
      color: 'white',
      fontSize: 27
    }
  });



