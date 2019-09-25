import styles from './styles'
import React, { Component } from 'react'
import { Text, View, Platform, TextInput } from 'react-native'
import Button from '../../components/Button'
import { Icon } from 'react-native-elements'
import { NavigationScreenProps } from 'react-navigation'
import { AsyncStorage } from 'react-native'

// using Buttons from react-native-elements due to navigate props

interface Props {
  navigation: NavigationScreenProps<any, any>
}

interface State {
  name: string
}

class HomeScreen extends Component {
  state: State = {
    name: 'hello'
  }

  componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
  
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: 'Home',
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

  setName = (value) => {
    AsyncStorage.setItem('name', value);
    this.setState({ 'name': value });
  }  

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>This is the HomeScreen.</Text>
        <Button label="Details" onPress={() => navigate('DetailScreen')} />
        <Button label="Options" onPress={() => navigate('OptionsScreen')} />
        <TextInput style = {styles.textInput} autoCapitalize = 'none' onChangeText = {this.setName}/>
            <Text>
              {this.state.name}
            </Text>
      </View>
    )
  }
}

export default HomeScreen
