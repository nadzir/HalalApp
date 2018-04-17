import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import thunk from 'redux-thunk'

import reducers from './reducers' // Import the reducer

// Connect our store to the reducers
export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)
