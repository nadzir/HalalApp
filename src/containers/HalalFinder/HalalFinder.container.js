import { HalalFinder } from '../HalalFinder'
import { connect } from 'react-redux'
import { storeItemsScaleX, storeItemsScaleY } from '../../redux/actions'

const mapStateToProps = (state) => {
  return {
    imagePath: state.image.path,
    imageBase64: state.image.base64,
    scaleX: state.image.scaleX,
    scaleY: state.image.scaleY
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeScaleX: (scaleX) => dispatch(storeItemsScaleX(scaleX)),
    storeScaleY: (scaleY) => dispatch(storeItemsScaleY(scaleY))
  }
}

export const HalalFinderContainer = connect(mapStateToProps, mapDispatchToProps)(HalalFinder)
