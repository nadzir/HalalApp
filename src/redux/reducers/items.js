import { UPDATE_ITEMS } from '../actions'

const initialState = {}

export const items = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEMS:
      return {
        ...state,
        db: action.items
      }
    default: return state
  }
}
