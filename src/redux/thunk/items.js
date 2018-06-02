import firebase from '../../firebase'
import { updateItems } from '../actions'

export const startFetchItems = () => {
  return (dispatch) => {
    firebase.database()
      .ref('items')
      .orderByKey()
      .limitToLast(20)
      .on('value', (itemsDb) => {
        const items = itemsDb.val()
        dispatch(updateItems(items))
      })
  }
}
