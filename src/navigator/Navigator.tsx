import React from 'react'
import strings from '../../src/configs/strings'
import BurgerMenu from '../components/BurgerMenu'
import DetailScreen from '../screens/Detail'
import HomeScreen from '../screens/Home'
import OptionsScreen from '../screens/Options'
import SettingsScreen from '../screens/Settings'
import LoadingScreen from '../screens/Loading'
import LoginScreen from '../screens/Login'
import PasswordResetScreen from '../screens/PasswordReset'
import RegisterScreen from '../screens/Register'
import { Platform } from 'react-native' // We can import Platform and use its select() function to programmatically use a different navigator based on the device
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator,
  NavigationScreenProps,
  NavigationTransitionProps,
  StackViewTransitionConfigs,
  TabScene,
  TransitionConfig,
} from 'react-navigation'
import { Icon } from 'react-native-elements'

const IOS_MODAL_ROUTES = ['OptionsScreen']

// ios specific nav, this will let you decide whih transition is used on a page to page basis
let dynamicModalTransition = (
  transitionProps: NavigationTransitionProps,
  prevTransitionProps: NavigationTransitionProps
): TransitionConfig => {
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    IOS_MODAL_ROUTES.some(
      screenName =>
        screenName === transitionProps.scene.route.routeName ||
        (prevTransitionProps &&
          screenName === prevTransitionProps.scene.route.routeName)
    )
  )
}

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

const SettingsStack = createStackNavigator({ SettingsScreen })

SettingsStack.navigationOptions = {
  tabBarLabel: strings.SETTINGS_TAB_TITLE,
  tabBarIcon: ({ tintColor }: TabScene) => (
    <Icon name="ios-cog" type="ionicon" color={tintColor} />
  ),
  drawerLabel: strings.SETTINGS_TAB_TITLE,
  drawerIcon: ({ tintColor }: TabScene) => (
    <Icon name="md-cog" type="ionicon" color={tintColor} />
  ),
}

const MainNavigator = Platform.select({
  ios: createBottomTabNavigator({ HomeStack, SettingsStack }),
  android: createDrawerNavigator(
    { HomeStack, SettingsStack },
    { contentComponent: BurgerMenu }
  ),
})

const LoginStack = createStackNavigator({ LoginScreen, PasswordResetScreen })

LoginStack.navigationOptions = ({ navigation }: NavigationScreenProps) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarLabel: strings.LOGIN,
    tabBarIcon: ({ tintColor }: TabScene) => {
      let iconName = Platform.select({
        ios: 'ios-log-in',
        android: 'md-log-in',
      })
      return <Icon name={iconName} type="ionicon" color={tintColor} />
    },
    tabBarVisible,
  }
}

const AuthTabs = createBottomTabNavigator({ LoginStack, RegisterScreen })

const RootSwitch = createSwitchNavigator(
  { LoadingScreen, AuthTabs, MainNavigator },
  { initialRouteName: 'MainNavigator' }
)

const AppContainer = createAppContainer(RootSwitch) //https://reactnavigation.org/docs/en/common-mistakes.html

export default AppContainer
