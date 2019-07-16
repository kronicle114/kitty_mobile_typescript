import React, { Component } from 'react'
import styles from './styles'
import { KeyboardAvoidingView, Text, Image } from 'react-native'
import Button from '../../components/Button'
import FormTextInput from '../../components/FormTextInput'
import DismissKeyboardView from '../../components/DismissKeyboardView'
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
  // LoginScreen header is null
  static navigationOptions = {
    header: null,
  }

  // create input refs to clear values
  usernameInputRef = React.createRef<FormTextInput>()
  passwordInputRef = React.createRef<FormTextInput>()

  state: State = {
    username: '',
    password: '',
  }

  handleUsernameChange = (username: string) => {
    this.setState({ username: username })
  }

  handlePasswordChange = (password: string) => {
    this.setState({ password: password })
  }

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus()
    }
  }

  testDBIsWorking = () => {
    console.log('api_base_url', API_BASE_URL)
    async function hitMyApiPls() {
      try {
        let response = await fetch(`${API_BASE_URL}/api/cats`)
        let responseJson = await response.json()
        // Alert.alert(responseJson)
        return responseJson
      } catch (error) {
        console.error(error)
      }
    }
    hitMyApiPls()
  }

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

    console.log('please just work')

    // if response is ok then set authToken to AsyncStorage & clear the input fields
    try {
      const { authToken } = await response.json()
      await AsyncStorage.setItem('authToken', authToken)
      return authToken
    } catch (err) {
      throw err
    } finally {
      this.setState({
        username: '',
        password: '',
      })
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
            onSubmitEditing={() => this.handleEmailSubmitPress()}
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            autoCapitalize="none"
          />
          <FormTextInput
            ref={this.passwordInputRef}
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
          <Button label="cats" onPress={this.testDBIsWorking} />
        </KeyboardAvoidingView>
      </DismissKeyboardView>
    )
  }
}

export default LoginScreen
