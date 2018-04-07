import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  listContainer: {
    flexDirection: 'column'
  },
  headerPic: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  unsplashLogoStyle: {
    width: 50,
    height: 50
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000'
  },
  authorTextStyle: {
    fontSize: 14,
    color: 'gray'
  },
  mainPicContainer: {
    height: 300,
    width: '100%'
  },
  mainPicStyle: {
    height: 250,
    width: '100%',
    resizeMode: 'contain'
  }
})
