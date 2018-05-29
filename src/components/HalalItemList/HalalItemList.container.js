import { connect } from 'react-redux'
import { HalalItemList } from './HalalItemList.view'
import { getItemList } from './HalalItemList.selector'

const mapStateToProps = (state) => {
  return {
    items: getItemList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const HalalItemListContainer = connect(mapStateToProps, mapDispatchToProps)(HalalItemList)
