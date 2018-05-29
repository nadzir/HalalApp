import { STORE_IMAGE_PATH, STORE_IMAGE_ITEMS, STORE_IMAGE_BASE64, STORE_ITEMS_SCALE_X, STORE_ITEMS_SCALE_Y, STORE_IMAGE_LOADING } from '../actions'

const initialState = {}

export const image = (state = initialState, action) => {
  switch (action.type) {
    case STORE_IMAGE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        loadingText: action.loadingText
      }
    case STORE_IMAGE_PATH:
      return {
        ...state,
        path: action.path
      }
    case STORE_IMAGE_BASE64:
      return {
        ...state,
        base64: action.base64
      }
    case STORE_IMAGE_ITEMS:
      return {
        ...state,
        items: action.items
      }
    case STORE_ITEMS_SCALE_X:
      return {
        ...state,
        scaleX: action.scaleX
      }
    case STORE_ITEMS_SCALE_Y:
      return {
        ...state,
        scaleY: action.scaleY
      }
    default: return state
  }
}
