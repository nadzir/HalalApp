import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const styles = StyleSheet.create({
  outerViewStyle: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: COLOURS.BRAND,
    flex: 1,
    justifyContent: 'center'
    // alignItems: 'center'
  },
  avatar: {
    margin: 20,
    backgroundColor: COLOURS.BRAND
  },
  topTextStyle: {
    color: COLOURS.WHITE
  },
  bottomTextStyle: {
    color: COLOURS.WHITE,
    margin: 50,
    textAlign: 'center'
  },
  button: {
    backgroundColor: COLOURS.BRAND,
    borderColor: COLOURS.WHITE,
    borderWidth: 1,
    borderRadius: 10
  },
  buttonContainer: {
    width: '80%'
  }
})
