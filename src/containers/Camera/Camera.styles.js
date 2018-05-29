import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column'
  },
  outerContainerStyles: {
    backgroundColor: COLOURS.BRAND,
    width: '100%'
  },
  camera: {
    flex: 1,
    borderColor: COLOURS.WHITE,
    borderWidth: 20
  },
  bottomView: {
    backgroundColor: COLOURS.WHITE,
    height: 100,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: COLOURS.WHITE,
    borderColor: COLOURS.BRAND,
    borderWidth: 1,
    borderRadius: 10,
    height: 70
  }
})
