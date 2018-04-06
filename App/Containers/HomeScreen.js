import React, {Component} from 'react'
import {
  View,
  TextInput
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

// Internal Libraries
import picActions from '../Redux/Reducers/pic'
// import PicListScreen from '../Components/PicListScreen'

// Styles

import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  componentDidMount () {
    this.props.getSearchPic('Home')
  }

  render () {
    return (
      <View>
        <View style={styles.searchBarWrapper}>
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchBarInputStyle}
              placeholder='Enter a tag for a photo'
              underlineColorAndroid='transparent'
            />
          </View>
        </View>
        {/* <PicListScreen /> */}
      </View>
    )
  }
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
