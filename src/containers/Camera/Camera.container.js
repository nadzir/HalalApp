import {CameraView} from '../Camera'
import { storeImagePath } from '../../redux/actions'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { processImage } from '../../redux/thunk'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeImagePath: (imagePath) => {
      // dispatch(storeImagePath(imagePath))
      dispatch(processImage(imagePath))
    },
    goToHalalFinderView: Actions.halalFinder
  }
}

export const CameraViewContainer = connect(mapStateToProps, mapDispatchToProps)(CameraView)
