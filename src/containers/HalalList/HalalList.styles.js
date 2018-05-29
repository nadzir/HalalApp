import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOURS.WHITE
  },
  outerContainerStyles: {
    backgroundColor: COLOURS.WHITE,
    width: '100%',
    position: 'absolute',
    zIndex: 2
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    borderColor: COLOURS.WHITE,
    borderWidth: 20
  },
  bottomView: {
    alignItems: 'center',
    backgroundColor: COLOURS.WHITE,
    height: 100,
    justifyContent: 'center'
  },
  buttonContainer: {
    // height: 200
  },
  button: {
    backgroundColor: COLOURS.WHITE,
    borderColor: COLOURS.BRAND,
    borderWidth: 1,
    borderRadius: 10
  }
})
