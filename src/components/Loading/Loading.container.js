import { connect } from 'react-redux'
import { Loading } from '../Loading'

const mapStateToProps = (state) => {
  return {
    imagePath: state.image.path,
    loadingText: state.image.loadingText || 'Loading'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const LoadingContainer = connect(mapStateToProps, mapDispatchToProps)(Loading)
