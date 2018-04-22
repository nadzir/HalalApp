import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    backgroundColor: COLOURS.BRAND,
    borderTopColor: COLOURS.BRAND_COMPLIMENT,
    borderTopWidth: 5,
    height: 150
  },
  avatar: {
    backgroundColor: COLOURS.BRAND_COMPLIMENT,
    margin: 5
  },
  text: {
    color: COLOURS.WHITE
  }
})
