import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const styles = StyleSheet.create({
  outerViewStyle: {
    flexDirection: 'column',
    backgroundColor: COLOURS.HOME_BACKGROUND,
    flex: 1,
    justifyContent: 'space-between'
  },
  topTextStyle: {
    color: COLOURS.BRAND,
    marginTop: 100,
    height: '50%',
    width: '80%',
    textAlign: 'left'
  },
  bottomTextStyle: {
    color: COLOURS.BRAND,
    width: '80%',
    left: 0,
    margin: 20,
    textAlign: 'left'
  }
})
