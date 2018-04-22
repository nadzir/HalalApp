import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const styles = StyleSheet.create({
  outerViewStyle: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    margin: 20,
    backgroundColor: COLOURS.BRAND
  },
  topTextStyle: {
    color: COLOURS.BRAND,
    textAlign: 'center'
  },
  bottomTextStyle: {
    color: COLOURS.BRAND_COMPLIMENT
  }
})
