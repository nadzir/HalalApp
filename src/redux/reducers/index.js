import { combineReducers } from 'redux'
import { image } from './image.js'
import { items } from './items.js'

const rootReducer = combineReducers({
  image,
  items
})

export default rootReducer
