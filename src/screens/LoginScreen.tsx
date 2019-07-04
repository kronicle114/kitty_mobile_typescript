import * as React from 'react'
// import axios from "axios";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Image,
  Alert,
  ActivityIndicator,
  View,
} from 'react-native'
import Button from '../components/Button'
import FormTextInput from '../components/FormTextInput'
import colors from '../configs/colors'
import strings from '../configs/strings'
import { API_BASE_URL, DATABASE_URL } from '../../config.js'

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

const something = ''

class LoginScreen extends React.Component<{}> {
  // componentWillMount() {
  //   fetch(`${API_BASE_URL}/cheeses`, {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json; charset=utf-8' },
  //   })
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       // console.log(responseJson)
  //       return responseJson
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }

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
    Alert.alert('meowww')
  }

  render() {
    return (
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
      </KeyboardAvoidingView>
    )
  }
}

export default LoginScreen
