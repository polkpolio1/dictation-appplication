import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import configureStore from './src/store/configureStore'
import AppContainer from './src/containers/AppContainer'


if (module.hot) {
  module.hot.accept();
}

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('dictationApp', () => App);
