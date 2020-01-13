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
  catBox: {
    width: 100
  },
  yieldBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  catCoarse: {
    width: 150
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
  },
  lightText: {
    fontSize: 14,
    fontWeight: '300'
  },
  regularText: {
    fontSize: 15,
    fontWeight: '400'
  },
  mediumText: {
    fontSize: 16,
    fontWeight: '500'
  },
  boldText: {
    fontSize: 18,
    fontWeight: '700'
  },
  yieldRegularText: {
    fontSize: 15,
    fontWeight: '400'
  },
  yieldBoldText: {
    width: 50,
    marginRight: 20,
    fontSize: 18,
    fontWeight: '700'
  }
});