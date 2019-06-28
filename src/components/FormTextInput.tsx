import * as React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import colors from '../configs/colors'

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    height: 40,
    borderColor: colors.BLACK,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
})

type Props = TextInputProps

class FormTextInput extends React.Component<Props> {
  textInputRef = React.createRef<TextInput>()

  focus = () => {
    if (this.textInputRef.current) {
      this.textInputRef.current.focus()
    }
  }
  render() {
    const { style, ...otherProps } = this.props
    return (
      <TextInput
        ref={this.textInputRef}
        selectionColor={colors.ORANGE}
        style={[styles.textInput, style]}
        {...otherProps}
      />
    )
  }
}

export default FormTextInput
