import {
    storeImagePath,
    STORE_IMAGE_PATH,
    STORE_IMAGE_BASE64,
    STORE_IMAGE_ITEMS,
    storeImageBase64,
    storeImageItems
} from '../actions'

describe('action/image', () => {
  it('should return correct action for storeImagePath()', () => {
    expect(storeImagePath('path'))
        .toEqual({type: STORE_IMAGE_PATH, path: 'path'})
  })
  it('should return correct action for storeImageBase64()', () => {
    expect(storeImageBase64('base64'))
        .toEqual({type: STORE_IMAGE_BASE64, base64: 'base64'})
  })
  it('should return correct action for storeImageItems()', () => {
    expect(storeImageItems('items'))
        .toEqual({type: STORE_IMAGE_ITEMS, items: 'items'})
  })
})
