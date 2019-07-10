import LoginScreen from './src/screens/LoginScreen'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'

const App = () => (
  <Provider store={store}>
    <LoginScreen />
  </Provider>
)

export default App
