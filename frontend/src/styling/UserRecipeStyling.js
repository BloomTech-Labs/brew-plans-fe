import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  recipeContainer: {
    width: '100%',
    backgroundColor: '#f7f7f7',
    marginVertical: 8,
    padding: 16,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'lightgray'
  },
  recipeTitle: {
     fontSize: 16,
     fontWeight: 'bold',    
     textAlign: 'left'
  },
  recipeInfoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  },
  recipeInfo: {
     flexDirection: 'row'
  },
  coarseness: {
     position: 'absolute',
     left: 0
  },
 iconButton: {
    height: 30,
    width: 30

  }
});
