import firebase from '../../firebase/config'
import { updateItems } from '../actions'

export const startFetchItems = () => {
  return (dispatch) => {
    firebase.database()
      .ref('items')
      .orderByChild('timestamp')
      .limitToLast(5)
      .on('value', (itemsDb) => {
        const items = itemsDb.val()
        const itemsWithKeys = addKeytoItems(items)
        dispatch(updateItems(itemsWithKeys))
      })
  }
}

export const addKeytoItems = (items) => {
  return Object.keys(items).map((key) => {
    const item = items[key]
    return {
      ...item,
      key
    }
  })
}
