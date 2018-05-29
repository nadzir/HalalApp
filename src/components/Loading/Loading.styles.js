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
  loadingText: {
    backgroundColor: 'transparent'
  },
  text: {
    margin: 10,
    color: COLOURS.BRAND
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    borderColor: COLOURS.WHITE,
    borderWidth: 20
  }
})
