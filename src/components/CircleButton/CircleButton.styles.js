import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const styles = StyleSheet.create({
  buttonStyle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: COLOURS.WHITE
  },
  containerViewStyle: {
    borderRadius: 50,
    height: 200,
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})
