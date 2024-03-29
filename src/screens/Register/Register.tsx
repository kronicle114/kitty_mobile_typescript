import strings from '../../configs/strings'
import styles from './styles'
import React, { Component } from 'react'
import { Platform, Text, KeyboardAvoidingView } from 'react-native'
import { Icon } from 'react-native-elements'
import { TabScene } from 'react-navigation'
import { NavigationScreenProps } from 'react-navigation'
import DismissKeyboardView from '../../components/DismissKeyboardView'
import FormTextInput from '../../components/FormTextInput'
import Button from '../../components/Button'

interface State {
  email: string
  password: string
  confirmPassword: string
}

class RegisterScreen extends Component<NavigationScreenProps> {
  static navigationOptions = {
    tabBarLabel: strings.REGISTER_TITLE,
    tabBarIcon: ({ tintColor }: TabScene) => {
      let iconName = Platform.select({
        ios: 'ios-person-add',
        android: 'md-person-add',
      })
      return <Icon name={iconName} type="ionicon" color={tintColor} />
    },
  }

  passwordInputRef = React.createRef<FormTextInput>()
  confirmPasswordInputRef = React.createRef<FormTextInput>()

  readonly state: State = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  handleEmailChange = (email: string) => {
    this.setState({ email: email })
  }

  handlePasswordChange = (password: string) => {
    this.setState({ password: password })
  }

  handleConfirmPasswordChange = (confirmPassword: string) => {
    this.setState({ confirmPassword: confirmPassword })
  }

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus()
    }
  }

  render() {
    return (
      <DismissKeyboardView containerStyles={{ backgroundColor: 'white' }}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text>This is the RegisterScreen.</Text>
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
          <FormTextInput
            value={this.state.confirmPassword}
            onChangeText={this.handleConfirmPasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
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

export default RegisterScreen
