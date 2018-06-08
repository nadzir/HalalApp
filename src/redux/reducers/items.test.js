import { Reducer } from 'redux-testkit'
import { items } from './items'
import { UPDATE_ITEMS } from '../actions'

describe('reducer/image.js', () => {
  it('should have initial state', () => {
    const state = undefined
    const action = {}
    expect(items(state, action)).toEqual({})
  })

  it('should store items ', () => {
    const action = {type: UPDATE_ITEMS, items: 'items'}
    const result = {db: 'items'}
    Reducer(items).expect(action).toReturnState(result)
  })
})
