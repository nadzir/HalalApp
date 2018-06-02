import { connect } from 'react-redux'
import { HighlightArea } from '../HighlightArea'
import { getCurrentItems } from './HighlightArea.selector'

const mapStateToProps = (state) => {
  return {
    items: getCurrentItems(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export const HighlightAreaContainer = connect(mapStateToProps, mapDispatchToProps)(HighlightArea)
