import firebase from '../../firebase'
import { updateItems } from '../actions'

export const startFetchItems = () => {
  return (dispatch) => {
    firebase.database()
      .ref('items')
      .orderByKey()
      .limitToLast(5)
      .on('value', (itemsDb) => {
        const items = itemsDb.val()
        const itemsWithKeys = addKeytoItems(items)
        dispatch(updateItems(itemsWithKeys))
      })
  }
}

const addKeytoItems = (items) => {
  return Object.keys(items).map((key) => {
    const item = items[key]
    return {
      ...item,
      key
    }
  })
}
