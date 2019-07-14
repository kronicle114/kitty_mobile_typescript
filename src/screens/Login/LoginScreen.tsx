import React, { Component } from 'react'
import styles from './styles'
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
import { AsyncStorage } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
// import { login } from '../../actions/auth'

interface State {
  username: string
  password: string
}

class LoginScreen extends Component<NavigationScreenProps> {
  static navigationOptions = {
    header: null,
  }

  passwordInputRef = React.createRef<FormTextInput>()

  state: State = {
    username: '',
    password: '',
  }

  componentWillMount() {
    this.setState({
      emailAddress: '',
      password: '',
    })
  }

  handleUsernameChange = (username: string) => {
    this.setState({ username: username })
    // console.log('meep', username)
  }

  handlePasswordChange = (password: string) => {
    this.setState({ password: password })
    // console.log('pw meep', password)
  }

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus()
    }
  }

  // testDBIsWorking = () => {
  //   console.log('api_base_url', API_BASE_URL)
  //   async function hitMyApiPls() {
  //     try {
  //       let response = await fetch(`${API_BASE_URL}/api/cats`)
  //       let responseJson = await response.json()
  //       Alert.alert(responseJson)
  //       return responseJson
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   hitMyApiPls()
  // }

  loginUser = async () => {
    let { username, password } = this.state
    console.log('u', username)
    console.log('p', password)
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json', //really weird how TS autoconverts this as a variable
    }
    const settings = {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers,
    }

    const response = await fetch(`${API_BASE_URL}/api/auth/login`, settings)
    if (!response.ok) {
      return console.error('something happened', response)
    }

    try {
      const { authToken } = await response.json()
      await AsyncStorage.setItem('authToken', authToken)
      const asyncstorageGetAuth = await AsyncStorage.getItem('authToken')
      console.log('asyncstorageGetAuth', asyncstorageGetAuth)
      return authToken
    } catch (err) {
      throw err
    }
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
            value={this.state.username}
            onChangeText={this.handleUsernameChange}
            placeholder={strings.USERNAME_PLACEHOLDER}
            onSubmitEditing={this.handleEmailSubmitPress}
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            autoCapitalize="none"
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
            autoCompleteType="password"
            autoCapitalize="none"
          />
          <Button label={strings.LOGIN} onPress={this.loginUser} />
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
