import {
  storeImagePath,
  STORE_IMAGE_PATH,
  STORE_IMAGE_BASE64,
  STORE_IMAGE_ITEMS,
  storeImageBase64,
  storeImageItems
} from '../actions'
import { storeImageLoading, STORE_IMAGE_LOADING } from './image'

describe('action/image', () => {
  it('should return correct action', () => {
    expect(storeImageLoading('isLoading', 'loadingText'))
      .toEqual(
        {
          type: STORE_IMAGE_LOADING,
          isLoading: 'isLoading',
          loadingText: 'loadingText'
        })
  })

  it('should return correct action', () => {
    expect(storeImagePath('path'))
      .toEqual(
        {
          type: STORE_IMAGE_PATH,
          path: 'path'
        })
  })

  it('should return correct action', () => {
    expect(storeImageBase64('base64'))
      .toEqual(
        {
          type: STORE_IMAGE_BASE64,
          base64: 'base64'
        })
  })

  it('should return correct action', () => {
    expect(storeImageItems('items'))
      .toEqual(
        {
          type: STORE_IMAGE_ITEMS,
          items: 'items'
        })
  })
})
