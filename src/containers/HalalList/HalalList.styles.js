import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOURS.WHITE
  },
  cardTitleStyleHalal: {
    color: COLOURS.BRAND
  },
  cardTitleStyleNotHalal: {
    color: COLOURS.NON_HALAL
  },
  cardDescTitle: {
    color: COLOURS.BlACK
  },
  cardDescText: {
    color: COLOURS.BRAND,
    marginBottom: 5
  },
  cameraButtonStyle: {
    position: 'absolute',
    bottom: 20,
    width: '100%'
  },
  button: {
    backgroundColor: COLOURS.WHITE,
    borderColor: COLOURS.BRAND,
    borderWidth: 1,
    borderRadius: 10,
    height: 70
  },
  ads: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  currentScanText: {
    textAlign: 'center',
    color: COLOURS.BRAND
  },
  currentScanTextView: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: {
    marginBottom: 120
  },
  divider: {
    backgroundColor: 'white'
  },
  card: {
    backgroundColor: COLOURS.CARD,
    borderRadius: 5
  }
})
