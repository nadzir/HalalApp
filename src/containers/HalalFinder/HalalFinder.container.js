import { HalalFinder } from '../HalalFinder'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    imagePath: state.image.path,
    imageBase64: state.image.base64
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const HalalFinderContainer = connect(mapStateToProps, mapDispatchToProps)(HalalFinder)
