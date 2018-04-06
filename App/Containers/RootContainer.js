import React, {Component} from 'react'
import {Root} from 'native-base'
import HomeScreen from './HomeScreen'

class RootContainer extends Component {
  render () {
    return (
      <Root>
        <HomeScreen />
      </Root>
    )
  }
}

export default RootContainer
