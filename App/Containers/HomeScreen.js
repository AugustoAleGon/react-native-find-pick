import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
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

class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOfPic: [],
      searchTerm: ''
    }
  }
  componentDidMount () {
    this.props.getSearchPic('Home')
  }

  render () {
    return (
      <View>
        <View style={styles.searchBarWrapper}>
          <View style={styles.searchBarContainer}>
            <Ionicon
              color={Colors.blueIOS}
              name='ios-search'
              size={24}/>
            <TextInput
              ref={ (val) => {this.searchInput = val }}
              value={this.state.searchTerm}
              onChangeText={(input) => {this.setState({searchTerm: input})}}
              style={styles.searchBarInputStyle}
              placeholder='Enter a tag for a photo'
              underlineColorAndroid='transparent'
            />
            <TouchableOpacity
              onPress={ () => {
                this.setState({searchTerm: ''})
              }
              }
              style={styles.searchButtonContainer}>
              <Text>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
        <PicListScreen
          mainPic='https://images.unsplash.com/photo-1510782977572-76493a0a7f57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjI0MDcxfQ&s=719af9667580e95e7adca175126877d4'
          authorName='Leonardo Da Vinci'/>
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
    getSearchPic: bindActionCreators(picActions.getSearchPic, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
