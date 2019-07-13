import DetailScreen from '../screens/Detail'
import HomeScreen from '../screens/Home'
import OptionsScreen from '../screens/Options'
import SettingsScreen from '../screens/Settings'
import LoadingScreen from '../screens/Loading'
import { Platform } from 'react-native' // We can import Platform and use its select() function to programmatically use a different navigator based on the device
import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator,
  NavigationTransitionProps,
  TransitionConfig,
  createAppContainer,
} from 'react-navigation'
import { StackViewTransitionConfigs } from 'react-navigation'

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
      // navigationOptions: ({ navigation }) => ({
      //   title: 'HomeScreeen',
      // }),
    },
    DetailScreen: {
      screen: DetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'DetailScreen',
      }),
    },
    OptionsScreen: {
      screen: OptionsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'OptionsScreen',
      }),
    },
  },
  { transitionConfig: dynamicModalTransition }
)

const SettingsStack = createStackNavigator({
  SettingsScreen: {
    screen: SettingsScreen,
    // navigationOptions: ({ navigation }) => ({
    //   title: 'SettingsScreen',
    // }),
  },
})

const MainNavigator = Platform.select({
  ios: createBottomTabNavigator({ HomeStack, SettingsStack }),
  android: createDrawerNavigator({ HomeStack, SettingsStack }),
})

const RootSwitch = createSwitchNavigator(
  { LoadingScreen, MainNavigator },
  { initialRouteName: 'MainNavigator' }
)

const AppContainer = createAppContainer(RootSwitch) //https://reactnavigation.org/docs/en/common-mistakes.html

export default AppContainer
