import { connect } from 'react-redux'
import { HighlightArea } from '../HighlightArea'
import { getItems } from './HighlightArea.selector'

const mapStateToProps = (state) => {
  return {
    items: getItems(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const HighlightAreaContainer = connect(mapStateToProps, mapDispatchToProps)(HighlightArea)
