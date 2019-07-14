import { StyleSheet } from 'react-native'
import colors from '../../configs/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '50%',
  },
})

export default styles
