export * from './image.js'

export const STORE_IMAGE_PATH = 'STORE_IMAGE_PATH'
export const storeImagePath = (path) => {
  return {
    type: STORE_IMAGE_PATH,
    path
  }
}

export const STORE_IMAGE_BASE64 = 'STORE_IMAGE_BASE64'
export const storeImageBase64 = (base64) => {
  return {
    type: STORE_IMAGE_BASE64,
    base64
  }
}

export const STORE_IMAGE_ITEMS = 'STORE_IMAGE_ITEMS'
export const storeImageItems = (items) => {
  return {
    type: STORE_IMAGE_ITEMS,
    items
  }
}

export const STORE_ITEMS_SCALE_X = 'STORE_ITEMS_SCALE_X'
export const storeItemsScaleX = (scaleX) => {
  return {
    type: STORE_ITEMS_SCALE_X,
    scaleX
  }
}

export const STORE_ITEMS_SCALE_Y = 'STORE_ITEMS_SCALE_Y'
export const storeItemsScaleY = (scaleY) => {
  return {
    type: STORE_ITEMS_SCALE_Y,
    scaleY
  }
}
