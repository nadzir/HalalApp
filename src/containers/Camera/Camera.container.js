import {CameraView} from '../Camera'
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
      dispatch(processImage(imagePath))
    },
    goToHalalFinderView: Actions.halalFinder
  }
}

export const CameraViewContainer = connect(mapStateToProps, mapDispatchToProps)(CameraView)
