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
    borderColor: COLOURS.BRAND_COMPLIMENT,
    borderWidth: 2
  },
  bottomView: {
    alignItems: 'center',
    backgroundColor: COLOURS.BRAND,
    height: 100,
    justifyContent: 'center'
  },
  buttonContainer: {
    // margin: 100
  },
  button: {
    backgroundColor: COLOURS.BRAND,
    borderColor: COLOURS.WHITE,
    borderWidth: 1,
    borderRadius: 10
  }
})
