export * from './image.js'

export const STORE_IMAGE_LOADING = 'STORE_IMAGE_LOADING'
export const storeImageLoading = (isLoading, loadingText) => {
  return {
    type: STORE_IMAGE_LOADING,
    isLoading,
    loadingText
  }
}

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
