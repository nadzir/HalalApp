import { STORE_IMAGE_PATH, STORE_IMAGE_ITEMS, STORE_IMAGE_BASE64 } from '../actions'

const initialState = {}

export const image = (state = initialState, action) => {
  switch (action.type) {
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
    default: return state
  }
}
