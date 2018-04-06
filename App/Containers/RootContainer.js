import React, {Component} from 'react'
import {View} from 'react-native'
import HomeScreen from './HomeScreen'

class RootContainer extends Component {
  render () {
    return (
      <View>
        <HomeScreen />
      </View>
    )
  }
}

export default RootContainer
