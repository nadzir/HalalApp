import { Reducer } from 'redux-testkit'
import { image } from './image'
import { STORE_IMAGE_PATH, STORE_IMAGE_BASE64, STORE_IMAGE_ITEMS } from '../actions'

describe('reducer/image.js', () => {
  it('should have initial state', () => {
    const state = undefined
    const action = {}
    expect(image(state, action)).toEqual({})
  })

  it('should store image path', () => {
    const action = {type: STORE_IMAGE_PATH, path: 'path'}
    const result = {path: 'path'}
    Reducer(image).expect(action).toReturnState(result)
  })

  it('should store image base64', () => {
    const action = {type: STORE_IMAGE_BASE64, base64: 'base64'}
    const result = {base64: 'base64'}
    Reducer(image).expect(action).toReturnState(result)
  })
  it('should store image items', () => {
    const action = {type: STORE_IMAGE_ITEMS, items: 'items'}
    const result = {items: 'items'}
    Reducer(image).expect(action).toReturnState(result)
  })
})
