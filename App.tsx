import AppLoader from './src/index'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'

const App = () => (
  <Provider store={store}>
    <AppLoader />
  </Provider>
)

export default App
