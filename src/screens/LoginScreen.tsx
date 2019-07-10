import * as React from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Image,
  Alert,
} from 'react-native'
import Button from '../components/Button'
import FormTextInput from '../components/FormTextInput'
import DismissKeyboardView from '../components/DismissKeyboardView'
import colors from '../configs/colors'
import strings from '../configs/strings'
import { API_BASE_URL } from '../../config.js'

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

class LoginScreen extends React.Component<{}> {
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

    async function hitMyApiPls() {
      try {
        // let response = await fetch(`http://209.6.178.89:8085/api/get-cats`)
        // let response = await fetch('https://localhost:8085/api/get-cats')
        let response = await fetch(`${API_BASE_URL}/api/get-cats`)
        let responseJson = await response.json()
        console.log('res: ', responseJson)
        return responseJson
      } catch (error) {
        console.error(error)
      }
    }
    hitMyApiPls()
  }

  handleMysteryPress = () => {
    async function getSkywalkerfromApi() {
      try {
        let response = await fetch(`https://swapi.co/api/people/1`)
        let responseJson = await response.json()
        console.log('res: ', responseJson)
        Alert.alert(responseJson.name)
        return responseJson
      } catch (error) {
        console.error(error)
      }
    }
    getSkywalkerfromApi()
  }

  handleCatImg = () => {
    async function getCat() {
      try {
        let response = await fetch(`https://api.thecatapi.com/v1/images/search`)
        let responseJson = await response.json()
        Alert.alert(responseJson[0].url)
        return responseJson
      } catch (error) {
        console.error(error)
      }
    }
    getCat()
  }

  render() {
    return (
      <DismissKeyboardView
        containerStyles={{ backgroundColor: 'rgb(50,72,105)' }}
      >
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
          <Button label={'???'} onPress={this.handleMysteryPress} />
          <Button label={'serve cat'} onPress={this.handleCatImg} />
        </KeyboardAvoidingView>
      </DismissKeyboardView>
    )
  }
}

export default LoginScreen
