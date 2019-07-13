import React, { Component } from 'react'
// import Orientation, { orientation } from 'react-native-orientation'
import Navigator from './navigator/Navigator'

interface Props {}
export default class App extends Component<Props> {
  //   componentDidMount = () => {
  //     Orientation.lockToPortrait()
  //   }

  render() {
    return <Navigator />
  }
}
