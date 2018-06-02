import { HalalList, getCurrentItem, getDbItems } from '../HalalList'
import { connect } from 'react-redux'
import { storeItemsScaleX, storeItemsScaleY } from '../../redux/actions'
import { branch, renderComponent, compose, lifecycle } from 'recompose'
import { LoadingContainer } from '../../components/Loading'
import { Actions } from 'react-native-router-flux'
import { startFetchItems } from '../../redux/thunk/items'

const mapStateToProps = (state) => {
  return {
    imagePath: state.image.path,
    imageBase64: state.image.base64,
    scaleX: state.image.scaleX,
    scaleY: state.image.scaleY,
    isLoading: state.image.isLoading,
    item: getCurrentItem(state),
    dbItems: getDbItems(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeScaleX: (scaleX) => dispatch(storeItemsScaleX(scaleX)),
    storeScaleY: (scaleY) => dispatch(storeItemsScaleY(scaleY)),
    triggerFetchItems: () => dispatch(startFetchItems()),
    goToCameraView: Actions.camera
  }
}

const withLoading = branch(
  ({isLoading}) => !isLoading,
  (t) => t,
  renderComponent(LoadingContainer)
)

const withLifeCycle = lifecycle({
  componentDidMount () {
    this.props.triggerFetchItems()
  }
})

export const HalalListContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoading,
  withLifeCycle
)(HalalList)
