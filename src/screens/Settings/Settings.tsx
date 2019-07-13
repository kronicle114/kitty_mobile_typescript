import styles from './styles'
import React, { Component } from 'react'
import { Platform, View, Text } from 'react-native'
import Button from '../../components/Button'
import strings from '../../configs/strings'
import { Icon } from 'react-native-elements'
import { NavigationScreenProps } from 'react-navigation'

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: 'Screen',
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

  handleLogoutPress = () => {
    console.log('pressed logout meow')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the SettingsScreen.</Text>
        <Button label={strings.LOGOUT} onPress={this.handleLogoutPress} />
      </View>
    )
  }
}

export default SettingsScreen
