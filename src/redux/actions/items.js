export const UPDATE_ITEMS = 'UPDATE_ITEMS'
export const updateItems = (items) => {
  return {
    type: UPDATE_ITEMS,
    items
  }
}

export const UPDATE_DB = 'UPDATE_DB'
export const updateDB = (items) => {
  return {
    type: UPDATE_DB,
    items
  }
}

export const START_FETCH_ITEMS = 'START_FETCH_ITEMS'
export const startFetchItems = () => {
  return {
    type: START_FETCH_ITEMS
  }
}

export const STOP_FETCH_ITEMS = 'STOP_FETCH_ITEMS'
export const stopFetchItems = () => {
  return {
    type: STOP_FETCH_ITEMS
  }
}
