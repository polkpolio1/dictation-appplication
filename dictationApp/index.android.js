import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import configureStore from './src/store/configureStore'
import Navigator from './src/containers/Navigator'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)

AppRegistry.registerComponent('dictationApp', () => App);
