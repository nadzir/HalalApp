import { connect } from 'react-redux'
import { HighlightArea } from '../HighlightArea'
import { getItems } from './HighlightArea.selector'
import { lifecycle, compose } from 'recompose'
import { AdMobInterstitial } from 'react-native-admob'
import { analytics } from '../../analytics'
import { INTERSTITIAL_AD_UNIT_ID } from 'react-native-dotenv'

const mapStateToProps = (state) => {
  return {
    items: getItems(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const withLifeCycle = lifecycle({
  componentDidMount () {
    const {items} = this.props
    if (items.length > 0) {
      AdMobInterstitial.setAdUnitID(INTERSTITIAL_AD_UNIT_ID)
      AdMobInterstitial.requestAd()
        .then(() => {
          AdMobInterstitial.showAd()
          analytics.trackEvent('Ads', 'Displayed Succesful', {label: `Ads displayed successfully`, value: 1})
        }).catch(error => {
          console.warn(error)
          analytics.trackEvent('Ads', 'Displayed Failed', {label: `Ads displayed Failed`, value: 1})
        })
    }
  }
})

export const HighlightAreaContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLifeCycle
)(HighlightArea)
