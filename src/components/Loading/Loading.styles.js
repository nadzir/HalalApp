import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: COLOURS.WHITE
  },
  middleView: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    zIndex: 2
  },
  bottomView: {
    alignItems: 'center',
    backgroundColor: COLOURS.WHITE,
    height: 100,
    justifyContent: 'center'
  },
  text: {
    margin: 10,
    color: COLOURS.BRAND
  }
})
