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
    height: 500,
    backgroundColor: COLOURS.BRAND_COMPLIMENT
  },
  bottomView: {
    alignItems: 'center',
    backgroundColor: COLOURS.BRAND,
    borderTopColor: COLOURS.BRAND_COMPLIMENT,
    borderTopWidth: 5,
    height: 100,
    justifyContent: 'center'
  },
  text: {
    margin: 10,
    color: COLOURS.WHITE
  }
})
