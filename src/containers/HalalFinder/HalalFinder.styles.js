import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const styles = StyleSheet.create({
  outerContainerStyles: {
    backgroundColor: COLOURS.HOME_BACKGROUND,
    width: '100%',
    position: 'absolute',
    zIndex: 2
  },
  image: {
    height: '100%',
    width: '100%'
    // flex: 1
  }
})
