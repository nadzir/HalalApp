import {CameraView} from '../Camera'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { processImage } from '../../redux/thunk'
import { getItemList } from '../../components/ItemList/ItemList.selector'

const mapStateToProps = (state) => {
  const items = getItemList(state)
  return {
    isShowAds: items.length > 0
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
