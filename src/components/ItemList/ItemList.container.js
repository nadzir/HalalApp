import { connect } from 'react-redux'
import { ItemList } from './ItemList.view'
import { getItemList } from './ItemList.selector'

const mapStateToProps = (state) => {
  return {
    items: getItemList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList)
