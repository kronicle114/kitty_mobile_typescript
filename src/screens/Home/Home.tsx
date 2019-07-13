import styles from './styles'
import React, { Component } from 'react'
import { Text, View, Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import { NavigationScreenProps } from 'react-navigation'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: 'Home',
    headerLeft: Platform.select({
      ios: null,
      android: (
        <Icon
          name="md-menu"
          type="ionicon"
          containerStyle={styles.icon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  })
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the HomeScreen.</Text>
      </View>
    )
  }
}

export default HomeScreen
