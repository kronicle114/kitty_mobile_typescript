import styles from './styles'
import strings from '../../configs/strings'
import React, { Component } from 'react'
import { Platform, View, Text } from 'react-native'
import Button from '../../components/Button'
import { Icon } from 'react-native-elements'
import { NavigationScreenProps } from 'react-navigation'

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: strings.SETTINGS_TAB_TITLE,
    headerLeft: Platform.select({
      ios: (
        <Icon
          name="ios-log-out"
          type="ionicon"
          containerStyle={styles.icon}
          onPress={() => navigation.navigate('LoginScreen')}
        />
      ),
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
        {/* <Button label={strings.LOGOUT} onPress={this.handleLogoutPress} /> */}
      </View>
    )
  }
}

export default SettingsScreen
