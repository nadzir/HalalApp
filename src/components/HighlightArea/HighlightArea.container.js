import { connect } from 'react-redux'
import { HighlightArea } from '../HighlightArea'
import { getItems } from './HighlightArea.selector'
import { lifecycle, compose } from 'recompose'
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'

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
    if (items.length === 0) {
      Alert.alert(
        'No Logo Found',
        'Try capturing an image with a Logo',
        [
          {text: 'OK', onPress: Actions.camera}
        ],
        { cancelable: false }
      )
    }
  }
})

// export const HighlightAreaContainer =
// connect(mapStateToProps, mapDispatchToProps)(HighlightArea)
export const HighlightAreaContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLifeCycle
)(HighlightArea)
