import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const styles = StyleSheet.create({
  topView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  middleView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%%',
    backgroundColor: COLOURS.BRAND_COMPLIMENT,
    opacity: 0.8,
    zIndex: 2
  },
  bottomView: {
    alignItems: 'center',
    backgroundColor: COLOURS.BRAND,
    height: 100,
    justifyContent: 'center'
  },
  text: {
    margin: 10,
    color: COLOURS.WHITE
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: -1
  }
})
