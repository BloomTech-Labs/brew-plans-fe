import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    recipeTitle: {

      width: '100%',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'left'
    },
    recipeDetails: {
      marginTop: 16
    },
    recipeDetailItem: {
      fontSize: 16,
      marginBottom: 8,
      padding: 10
    },
    iconWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      maxWidth: "49%"
      },
      topInfo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"

      }
  })