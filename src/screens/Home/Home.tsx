import styles from './styles'
import React, { Component } from 'react'
import { Text, View, Platform } from 'react-native'
import Button from '../../components/Button'
import { Icon } from 'react-native-elements'
import { NavigationScreenProps } from 'react-navigation'

// using Buttons from react-native-elements due to navigate props

interface Props {
  navigation: NavigationScreenProps<any, any>
}

class HomeScreen extends Component {
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
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>This is the HomeScreen.</Text>
        <Button label="Details" onPress={() => navigate('DetailScreen')} />
        <Button label="Options" onPress={() => navigate('OptionsScreen')} />
      </View>
    )
  }
}

export default HomeScreen
