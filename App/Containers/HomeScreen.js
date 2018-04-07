import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Ionicon from 'react-native-vector-icons/Ionicons'

// Internal Libraries
import picActions from '../Redux/Reducers/pic'
import PicListScreen from '../Components/PicListScreen'

// Styles
import styles from './Styles/HomeScreenStyle'
import {Colors} from '../Themes'

// For testing purpose we this array
const testArray = [
  {
    name: 'Marco',
    id: '1'
  },
  {
    name: 'Polo',
    id: '2'
  },
  {
    name: 'Cris',
    id: '3'
  }
]

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  _renderItem = ({item}) => {
    if (item.user) {
      return (
        <PicListScreen
          mainPic={item.urls.regular}
          authorName={item.user.name} />
      )
    } else {
      return (
        <Text>There is no data here</Text>
      )
    }
    }

  //In order to clean the state for the next query
  componentDidMount () {
    this.props.resetAll()
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.searchBarWrapper}>
          <View style={styles.searchBarContainer}>
            <Ionicon
              color={Colors.blueIOS}
              name='ios-search'
              size={24} />
            <TextInput
              value={this.state.searchTerm}
              onChangeText={(input) => { this.setState({searchTerm: input}) }}
              style={styles.searchBarInputStyle}
              placeholder='Enter a tag for a photo'
              underlineColorAndroid='transparent'
            />
            <TouchableOpacity
              onPress={() => {
                this.props.getSearchPic(this.state.searchTerm)
                this.setState({searchTerm: ''})
              }
              }
              style={styles.searchButtonContainer}>
              <Text>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            renderItem={this._renderItem}
            keyExtractor={item => item.id}
            data={this.props.picList.picList} />
        </View>
      </View>
    )
  }g
}

const mapStateToProps = (state, props) => {
  return {
    picList: state.pic.picList
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getSearchPic: bindActionCreators(picActions.getSearchPic, dispatch),
    resetAll: bindActionCreators(picActions.picsReset, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
