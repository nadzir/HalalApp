import { HalalFinder } from '../HalalFinder'
import { connect } from 'react-redux'
import { storeItemsScaleX, storeItemsScaleY } from '../../redux/actions'
import { branch, renderComponent, compose } from 'recompose'
import { Loading } from '../../components/Loading'
import { getItems } from '../../components/HighlightArea/HighlightArea.selector'

const mapStateToProps = (state) => {
  return {
    imagePath: state.image.path,
    imageBase64: state.image.base64,
    scaleX: state.image.scaleX,
    scaleY: state.image.scaleY,
    isLoading: state.image.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeScaleX: (scaleX) => dispatch(storeItemsScaleX(scaleX)),
    storeScaleY: (scaleY) => dispatch(storeItemsScaleY(scaleY))
  }
}

const withLoading = branch(
  ({isLoading}) => !isLoading,
  (t) => t,
  renderComponent(Loading)
)

export const HalalFinderContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoading
)(HalalFinder)
