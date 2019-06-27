import * as React from 'react'
import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import Button from '../components/Button'
import FormTextInput from '../components/FormTextInput'
import colors from '../configs/colors'
import strings from '../configs/strings'

interface State {
    email: string
    password: string
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.WHITE,
      alignItems: "center",
      justifyContent: "center"
    }, 
    form: {
        flex: 1, 
        justifyContent: "center",
        width: "50%"
    }
});

class LoginScreen extends React.Component<{}> {
    readonly state: State = {
        email: '',
        password: ''
    }

    handleEmailChange = (email: string) => {
        this.setState({email: email})
    }

    handlePasswordChange = (password: string) => {
        this.setState({password: password})
    }

    handleLoginPress = () => {
        console.log('pressed login meow')
        Alert.alert("meowww");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{strings.WELCOME}</Text>
                <Image 
                    source={{
                        uri: "https://alphapixelreach.com/wp-content/uploads/2017/08/7399-cat-face.png"
                    }} 
                    style = {{ width: 200, height: 200 }}
                />
                <FormTextInput
                    value={this.state.email}
                    onChangeText={this.handleEmailChange}
                    placeholder={strings.EMAIL_PLACEHOLDER}  
                />
                <FormTextInput
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange}
                    placeholder={strings.PASSWORD_PLACEHOLDER}  
                />
                <Button 
                    label={strings.LOGIN} 
                    onPress={this.handleLoginPress} 
                />
            </View>
        )
    }
}
  
export default LoginScreen;