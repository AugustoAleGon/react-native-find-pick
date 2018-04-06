import React, { Component } from 'react'
import {
  Platform,
  View
} from 'react-native'
import RootContainer from './Containers/RootContainer'
import { Provider } from 'react-redux'
import DebugConfig from './Config/DebugConfig'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {persistStore} from 'redux-persist'
import createStore from './Redux'

// Create our store
const store = createStore()
const persistor = persistStore(store)

type Props = {}
class App extends Component<Props> {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{
            flex: 1,
            paddingTop: Platform.OS === 'ios' ? 20 : 0,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <RootContainer />
          </View>
        </PersistGate>
      </Provider>
    )
  }
}

export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
