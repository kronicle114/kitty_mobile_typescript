import {
    NavigationTransitionProps,
    StackViewTransitionConfigs,
    TransitionConfig,
} from 'react-navigation'
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

export default dynamicModalTransition