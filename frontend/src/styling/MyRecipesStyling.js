import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    pageContainer: {
      padding: 20,
      flex: 1
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
      // paddingVertical: 15,
      width: wp('90%'),
      alignSelf: 'center',
      flex: 1
    },
    navbarButton: {
      width: wp('90%'),
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



