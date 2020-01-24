import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  timerText: {
    fontSize:hp('5.3%'), 
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",

  },
  icons: {
    padding: '1%',
  },
  textWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  },
  timerWrapper: {
      marginTop: '3.3%'
  }
});
