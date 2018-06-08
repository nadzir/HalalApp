import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers' // Import the reducer

const persistConfig = {
  key: 'halalApp',
  storage,
  whitelist: ['image', 'items']
}

const persistedReducer = persistReducer(persistConfig, reducers)
const composeEnhancers = composeWithDevTools({ shouldHotReload: false })

export default createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
