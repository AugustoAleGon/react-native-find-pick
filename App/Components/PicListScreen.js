import React, {Component} from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

// Styles
import {Images} from '../Themes'

import styles from './Styles/PicListScreenStyle'

class PicListScreen extends Component {
  render () {
    return (
      <View style={styles.listContainer}>
        <View style={styles.headerPic}>
          <Image
            style={styles.unsplashLogoStyle}
            source={Images.unsplashLogo} />
          <View>
            <Text style={styles.titleStyle}>
              Unplash
            </Text>
            <Text style={styles.authorTextStyle}>
              {this.props.authorName}
            </Text>
          </View>
        </View>
        <View style={styles.mainPicContainer}>
          <Image
            source={{uri: this.props.mainPic}}
            style={styles.mainPicStyle}/>
        </View>
      </View>
    )
  }
}

export default PicListScreen
