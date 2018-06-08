import firebase from './config'

export const removeToFiveItems = () => {
  const ref = firebase.database()
    .ref('items')
    .orderByChild('timestamp')

  ref.on('value', (itemsDb) => {
    const numToRemove = itemsDb.numChildren() - 5
    const lastFive = itemsDb._childKeys.slice(0, numToRemove)
    const updates = {}
    lastFive.map(key => {
      updates[key] = null
    })
    ref.update(updates)
  })
}

export const addItems = (item) => {
  firebase.database()
    .ref('items')
    .push(item)
}
