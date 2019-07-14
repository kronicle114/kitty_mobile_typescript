import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Image,
  Alert,
} from 'react-native'
import Button from '../../components/Button'
import FormTextInput from '../../components/FormTextInput'
import DismissKeyboardView from '../../components/DismissKeyboardView'
import colors from '../../configs/colors'
import strings from '../../configs/strings'
import { API_BASE_URL } from '../../../config'
import { NavigationScreenProps } from 'react-navigation'

interface State {
  email: string
  password: string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '50%',
  },
})

class LoginScreen extends Component<NavigationScreenProps> {
  static navigationOptions = {
    header: null,
  }

  passwordInputRef = React.createRef<FormTextInput>()

  readonly state: State = {
    email: '',
    password: '',
  }

  handleEmailChange = (email: string) => {
    this.setState({ email: email })
  }

  handlePasswordChange = (password: string) => {
    this.setState({ password: password })
  }

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus()
    }
  }

  handleLoginPress = () => {
    console.log('pressed login meow')
    console.log('api_base_url', API_BASE_URL)
    async function hitMyApiPls() {
      try {
        let response = await fetch(`${API_BASE_URL}/api/cats`)
        let responseJson = await response.json()
        Alert.alert(responseJson)
        return responseJson
      } catch (error) {
        console.error(error)
      }
    }
    hitMyApiPls()
  }

  render() {
    return (
      <DismissKeyboardView containerStyles={{ backgroundColor: 'white' }}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text>{strings.WELCOME}</Text>
          <Image
            source={{
              uri:
                'https://alphapixelreach.com/wp-content/uploads/2017/08/7399-cat-face.png',
            }}
            style={{ width: 200, height: 200 }}
          />
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
            onSubmitEditing={this.handleEmailSubmitPress}
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
          />
          <Button label={strings.LOGIN} onPress={this.handleLoginPress} />
          <Button
            label={strings.FORGOT_PW}
            onPress={() =>
              this.props.navigation.navigate('PasswordResetScreen')
            }
          />
          <Button
            label={strings.BACK_TO_LOGIN}
            onPress={() => this.props.navigation.navigate('HomeScreen')}
          />
        </KeyboardAvoidingView>
      </DismissKeyboardView>
    )
  }
}

export default LoginScreen
