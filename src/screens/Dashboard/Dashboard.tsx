import styles from './styles'
import React, { Component } from 'react'
import { AsyncStorage, Text, View, TextInput } from 'react-native'

class DashboardScreen extends Component {

  state = {
    'name': ''
  }
  componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
 
  setName = (value) => {
    AsyncStorage.setItem('name', value);
    this.setState({ 'name': value });
  }  
  
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a protected DashboardScreen.</Text>
      </View>
    )
  }
}

export default DashboardScreen
