import React from 'react'
import strings from '../../src/configs/strings'
import DetailScreen from '../screens/Detail'
import HomeScreen from '../screens/Home'
import OptionsScreen from '../screens/Options'
import dynamicModalTransition from './dynamicModalTransition'
import { Icon } from 'react-native-elements'

import { 
    createStackNavigator,
    NavigationScreenProps,
    TabScene,
} from 'react-navigation'
const HomeStack = createStackNavigator(
    {
      HomeScreen: {
        screen: HomeScreen,
      },
      DetailScreen: {
        screen: DetailScreen,
      },
      OptionsScreen: {
        screen: OptionsScreen,
      },
    },
    { transitionConfig: dynamicModalTransition }
  )
  
  HomeStack.navigationOptions = ({ navigation }: NavigationScreenProps) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
      tabBarVisible = false
    }
  
    let drawerLockMode = 'unlocked'
    if (navigation.state.index > 0) {
      drawerLockMode = 'locked-closed'
    }
  
    return {
      tabBarLabel: strings.HOME_TAB_TITLE,
      tabBarIcon: ({ tintColor }: TabScene) => (
        <Icon name="ios-home" type="ionicon" color={tintColor} />
      ),
      tabBarVisible,
      drawerLockMode,
      drawerLabel: strings.HOME_TAB_TITLE,
      drawerIcon: ({ tintColor }: TabScene) => (
        <Icon name="md-home" type="ionicon" color={tintColor} />
      ),
    }
  }

export default HomeStack