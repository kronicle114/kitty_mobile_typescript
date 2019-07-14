import strings from '../../configs/strings'
import styles from './styles'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from '../../components/Button'
import { NavigationScreenProps } from 'react-navigation'

class PasswordResetScreen extends Component<NavigationScreenProps> {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ paddingBottom: 20 }}>
          This is the PasswordResetScreen.
        </Text>
        <Button
          label={strings.BACK_TO_LOGIN}
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
      </View>
    )
  }
}

export default PasswordResetScreen
