import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  outerContainerStyles: {
    backgroundColor: COLOURS.BRAND,
    width: '100%',
    position: 'absolute',
    zIndex: 2
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: -1
  },
  bottomView: {
    alignItems: 'center',
    backgroundColor: COLOURS.BRAND,
    height: 100,
    justifyContent: 'center'
  },
  buttonContainer: {
    // height: 200
  },
  button: {
    backgroundColor: COLOURS.BRAND,
    borderColor: COLOURS.WHITE,
    borderWidth: 1,
    borderRadius: 10
  }
})
