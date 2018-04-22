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
    flex: 1
  },
  bottomView: {
    alignItems: 'center',
    backgroundColor: COLOURS.BRAND,
    borderTopColor: COLOURS.BRAND_COMPLIMENT,
    borderTopWidth: 5,
    height: 100,
    justifyContent: 'center'
  },
  buttonContainer: {
    // margin: 100
  },
  button: {
    backgroundColor: COLOURS.BRAND_COMPLIMENT,
    borderRadius: 10
  }
})
