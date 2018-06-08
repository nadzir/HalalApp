import { updateItems, UPDATE_ITEMS, UPDATE_DB, updateDB, startFetchItems, START_FETCH_ITEMS, stopFetchItems, STOP_FETCH_ITEMS } from './items'

describe('action/image', () => {
  it('should return correct action', () => {
    expect(updateItems('items'))
      .toEqual(
        {
          type: UPDATE_ITEMS,
          items: 'items'
        })
  })

  it('should return correct action', () => {
    expect(updateDB('items'))
      .toEqual(
        {
          type: UPDATE_DB,
          items: 'items'
        })
  })

  it('should return correct action', () => {
    expect(startFetchItems())
      .toEqual(
        {
          type: START_FETCH_ITEMS
        })
  })

  it('should return correct action', () => {
    expect(stopFetchItems())
      .toEqual(
        {
          type: STOP_FETCH_ITEMS
        })
  })
})
