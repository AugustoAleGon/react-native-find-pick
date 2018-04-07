import {StyleSheet} from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  searchBarWrapper: {
    margin: 7
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 7
  },
  searchBarInputStyle: {
      color: '#000',
      paddingLeft: 5,
      flex: 1
  },
  searchButtonContainer: {
      width: 70,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.5,
      borderRadius: 5,
      borderColor: Colors.darkBlueIOS
  }
})
