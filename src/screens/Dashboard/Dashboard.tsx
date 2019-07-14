import styles from './styles'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the DashboardScreen.</Text>
      </View>
    )
  }
}

export default DashboardScreen
