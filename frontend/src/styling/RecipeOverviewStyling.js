import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewBox: {
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: '#F6F7F7',
    color: '#231C1C'
  },
  titleBox: {
    width: '100%',
    height: 'auto',
    padding: 20,
    backgroundColor: '#E8ECEC',
    borderRadius: 2,
  },
  contentBox: {
    width: '100%',
    height: 'auto',
    marginTop: 14,
    padding: 20,
    backgroundColor: '#E8ECEC',
    borderRadius: 2,
  },
  innerBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleTitle: {
    fontSize: 26,
    fontWeight: '700',
  },
  titleCat: {
    fontSize: 14,
    fontWeight: '300'
  },
  titleContent: {
    fontSize: 16,
    fontWeight: '500'
  }
});