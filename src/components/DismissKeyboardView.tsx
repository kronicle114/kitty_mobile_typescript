import React from 'react'
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native'
import PropTypes from 'prop-types'

const DismissKeyboardView = ({ children, containerStyles }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={[{ flex: 1 }, containerStyles]}>{children}</View>
  </TouchableWithoutFeedback>
)

export default DismissKeyboardView

DismissKeyboardView.propTypes = {
  children: PropTypes.any,
  containerStyles: PropTypes.object,
}
